import React from "react";
import Search from "../../components/Search/Search";
import SearchedAnime from "../../components/SearchedAnime/SearchedAnime";
import TopAnimeList from "../../components/TopAnimeList/TopAnimeList";

const Main: React.FC = () => {
    return (
        <div>
            <Search />
            <SearchedAnime/>
            {/* <TopAnimeList /> */}
        </div>

    )
}

export default Main;