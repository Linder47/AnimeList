import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

const AnimeList: React.FC = () => {
    const { animeList, error, loading } = useTypedSelector(state => state.animeList)
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {animeList.map(anime => 
                <div key={anime.id}></div>
            )}
        </div>
    )

}

export default AnimeList;