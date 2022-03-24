import React, { useEffect, useState } from 'react';
// import  useHistory  from "react-router-dom";
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
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
    const { addAnimeInfo, setSearchedAnimePage, fetchSearchedAnimeList } = useActions();
    const navigate = useNavigate();
    const params = useParams();
    let animeListChunks: any[] = [];
    const [page, setPage] = useState(1);
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

    console.log(animeList);
    console.log(animeList.length);

    if (animeList.length > 0) {
        console.log(' а мы тут??')
        animeListChunks = sliceIntoChunks(animeList, 8);
        showAnimeList = animeListChunks[page - 1];
        console.log(animeListChunks);
    }

    const changePages = (p: number) => {
        console.log('надо бы страничку поменять ' + p);
        console.log(typeof p);
        setPage(p);
        console.log(page);
    };

    useEffect(() => {
        console.log('мы в юз эффекте???')
        showAnimeList = animeListChunks[page - 1];
    }, [page])


    if (loading) {
        return <p>Loading searched anime</p>
    }

    if (error) {
        return <p>Искомое аниме с ошибкой.</p>
    }

    return (
        <div >
            <Outlet />
            <h3 className='title--block'>Anime List</h3>
            <div className='searched-anime--block' >
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

// style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }