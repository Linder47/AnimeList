import React, { useEffect } from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TopAnimeList: React.FC = () => {
    const { topAnimeList, error, loading } = useTypedSelector(state => state.topAnimeList);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {topAnimeList.map(anime =>
                <div key={anime.mal_id}>{anime.title}</div>
            )}
        </div>
    )

}

export default TopAnimeList;