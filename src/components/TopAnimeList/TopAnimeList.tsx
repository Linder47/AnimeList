import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from '../../hooks/useActions';

const TopAnimeList: React.FC = () => {
    const { topAnimeList, error, loading, page, limit } = useTypedSelector(state => state.topAnimeList);
    const { fetchTopAnimeList, setAnimeListPage } = useActions()
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTopAnimeList(page, limit)
    }, [page])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <div>
                {topAnimeList.map(anime =>
                    <div key={anime.mal_id}>{anime.title}</div>
                )}
            </div>
            <div style={{ display: "flex" }}>
                {pages.map(p =>
                    <div key={p}
                        onClick={() => setAnimeListPage(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}




export default TopAnimeList;