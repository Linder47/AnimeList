import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from '../../hooks/useActions';
import { useNavigate} from "react-router-dom";
import { AnimeState } from '../../types/anime';

const sliceIntoChunks = (arr: any[], chunkSize: number): any[] => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const TopAnimeList: React.FC = () => {
    const { topAnimeList, error, loading } = useTypedSelector(state => state.topAnimeList);
    const { fetchTopAnimeList, addAnimeInfo } = useActions()
    let animeListChunks: any[] = [];
    const [page, setPage] = useState(1);
    let showTopAnimeList: any[] = [];
    const pages = [1, 2, 3, 4, 5, 6, 7];
    const navigate = useNavigate();

    useEffect(() => {
        fetchTopAnimeList()
    }, []) 

    const addAnimeInformationToTheStore = (event: React.MouseEvent<HTMLDivElement>, anime: AnimeState, id: string | number) => {
        event.preventDefault();
        addAnimeInfo(anime);
        navigate('anime/' + id);
        window.scrollTo(0, 0)
    }

    if (topAnimeList.length > 0) {
        animeListChunks = sliceIntoChunks(topAnimeList, 8);
        showTopAnimeList = animeListChunks[page - 1];
           }

    const changePages = (p: number) => {
        setPage(p);
    };

    useEffect(() => {
        showTopAnimeList = animeListChunks[page - 1];
    }, [page])

    if (loading) {
        <div ></div>
    }

    if (error) {
        <div></div>
    }

    return (
        <div>
            <div className='searched-anime--wrap'>
                <h3 className='title--block'>Top Anime</h3>
                <div className='searched-anime--list'>
                    {showTopAnimeList.map(ani =>
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
        </div>
    )
}

export default TopAnimeList;