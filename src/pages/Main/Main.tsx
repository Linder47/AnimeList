import React from "react";
import { Outlet } from "react-router-dom";
import AnimeInformation from "../../components/AnimeInformation/AnimeInformation";
import Search from "../../components/Search/Search";
import SearchedAnime from "../../components/SearchedAnime/SearchedAnime";

import TopAnimeList from "../../components/TopAnimeList/TopAnimeList";

const Main: React.FC = () => {
    return (
        <div>
            <Search />
            <Outlet />
     
            <TopAnimeList />
        </div>

    )
}

export default Main;