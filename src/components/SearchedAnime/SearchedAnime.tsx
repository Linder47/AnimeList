import React, { useEffect } from 'react';
// import  useHistory  from "react-router-dom";
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AnimeState } from '../../types/anime';

const SearchedAnime: React.FC = () => {
    const { animeList, loading, error, page, limit } = useTypedSelector(state => state.searchedAnimeList);
    const { addAnimeInfo, setSearchedAnimePage, fetchSearchedAnimeList } = useActions();
    const navigate = useNavigate();
    // const pages = [1, 2, 3, 4, 5]

    const addAnimeInformationToTheStore = (event: React.MouseEvent<HTMLDivElement>, anime: AnimeState, title: string) => {

    event.preventDefault();
    console.log(title);
    console.log(anime);
    // console.log(ani.score);
    // console.log('ДАРОВА' + ani.mal_id);
    // // console.log(anime.anime);
    addAnimeInfo(anime);
    navigate('animeTitle/' + title);
}

// const changePages = (p: number) => {
//     console.log('ну посмотрим ядрен батон. page ' + p);
//     setSearchedAnimePage(p)
//     fetchSearchedAnimeList('naruto', p)
// };

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
        <Outlet />
        {/* <div style={{ display: "flex" }}>
                {pages.map(p =>
                    <div key={p}
                        onClick={() => changePages(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div> */}

        {animeList.map(ani =>
            <div key={ani.mal_id} onClick={(e) => addAnimeInformationToTheStore(e, ani, ani.title)}>
                {/* <NavLink to={`/anime=`} > */}
                <img src={ani.image_url} alt="logo" />
                {/* </NavLink> */}
            </div>
        )}

    </div>
)
}

export default SearchedAnime;

// <NavLink to={`/anime=${ani.title}`} >