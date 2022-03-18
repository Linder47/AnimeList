import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink } from "react-router-dom";
import { AnimeState } from '../../types/anime';

const SearchedAnime: React.FC = () => {
    const { anime, loading, error } = useTypedSelector(state => state.searchedAnimeList);
    const { addAnimeInfo } = useActions();

    const addAnimeInformationToTheStore = (event: React.MouseEvent<HTMLDivElement>, anime: AnimeState) => {
        event.preventDefault();
        console.log(anime);
        addAnimeInfo({anime});
    }

    if (loading) {
        return <p>Loading searched anime</p>
    }

    if (error) {
        return <p>Искомое аниме с ошибкой.</p>
    }

    return (
        <div>
            {anime.map(ani =>
                <div key={ani.mal_id} onClick={(e) => addAnimeInformationToTheStore(e, ani)}>
                    <NavLink to="/anime="  >
                        <img src={ani.image_url} alt="logo" />
                    </NavLink>
                </div>


            )}
        </div>
    )
}

export default SearchedAnime;