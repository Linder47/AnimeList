import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { AnimeState } from '../../types/anime';
import '../../App.css';

const sliceIntoChunks = (arr: any[], chunkSize: number): any[] => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const SearchedAnime: React.FC = () => {
    let { animeList, loading, error } = useTypedSelector(state => state.searchedAnimeList);
    const { addAnimeInfo, fetchSearchedAnimeList } = useActions();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const params = useParams();

    let animeListChunks: any[] = [];
    let showAnimeList: any[] = [];
    const pages = [1, 2, 3];

    if (animeList.length === 0 && loading === false &&
        error === null && params.nameOfAnimeList !== undefined) {
        fetchSearchedAnimeList(params.nameOfAnimeList.toLowerCase());
    }

    const addAnimeInformationToTheStore = (event: React.MouseEvent<HTMLDivElement>, anime: AnimeState, id: string | number) => {
        event.preventDefault();
        addAnimeInfo(anime);
        navigate('anime/' + id);
        window.scrollTo(0, 0)
    }

    if (animeList.length > 0) {
        animeListChunks = sliceIntoChunks(animeList, 8);
        showAnimeList = animeListChunks[page - 1];
        console.log(animeListChunks);
    }

    const changePages = (p: number) => {
        setPage(p);
    };

    useEffect(() => {
        showAnimeList = animeListChunks[page - 1];
    }, [page])

    useEffect(() => {
        setPage(1);
    }, [animeList])


    if (loading) {
        return <div className='loading-error'><p>Loading searched anime...</p></div>
    }

    if (error) {
        return <div className='loading-error'><p>Anime was not found :C</p></div>
    }

    return (
        <div >
            <Outlet />
            <div className='searched-anime--wrap'></div>
            <h3 className='title--block'>Anime List</h3>
            <div className='searched-anime--list' >
                {showAnimeList.map(ani =>
                    <div key={ani.mal_id} onClick={(e) => addAnimeInformationToTheStore(e, ani, ani.mal_id)}>
                        <img src={ani.image_url} alt="logo" />
                    </div>
                )}
            </div>
            <div className='pages'>
                {pages.map(p =>
                    <div className={p === page ? 'page  page--active' : 'page'} key={p}
                        onClick={() => changePages(p)} >
                        {p}
                    </div>
                )}
            </div>
        </div >
    )
}

export default SearchedAnime;
