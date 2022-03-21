import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink } from "react-router-dom";
import { AnimeState } from '../../types/anime';

const SearchedAnime: React.FC = () => {
    const { animeList, loading, error, page, limit } = useTypedSelector(state => state.searchedAnimeList);
    const { addAnimeInfo, setSearchedAnimePage, fetchSearchedAnimeList } = useActions();
    const pages = [1, 2, 3, 4, 5]

    const addAnimeInformationToTheStore = (event: React.MouseEvent<HTMLDivElement>, anime: AnimeState) => {
        event.preventDefault();
        console.log(anime);
        addAnimeInfo(anime);
    }

    const changePages = (p: number) => {
        console.log('ну посмотрим ядрен батон. page ' + p);
        setSearchedAnimePage(p)
        fetchSearchedAnimeList('naruto', p)
    };

    console.log(animeList);

    // useEffect(() => {
    //     fetchSearchedAnimeList(, page, limit)
    // }, [page])

    if (loading) {
        return <p>Loading searched anime</p>
    }

    if (error) {
        return <p>Искомое аниме с ошибкой.</p>
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                {pages.map(p =>
                    <div key={p}
                        onClick={() => changePages(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div>
            
                {animeList.map(ani =>
                    <div key={ani.mal_id} onClick={(e) => addAnimeInformationToTheStore(e, ani)}>
                        <NavLink to={`/anime=`} >
                            <img src={ani.image_url} alt="logo" />
                        </NavLink>
                    </div>
                )}
            
        </div>
    )
}

export default SearchedAnime;

// <NavLink to={`/anime=${ani.title}`} >