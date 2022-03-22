import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchedAnime from './components/SearchedAnime/SearchedAnime';
import AnimeInformation from './components/AnimeInformation/AnimeInformation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Main /> */}
        <Routes>
          <Route path="/" element={<Main />} >
            {/* <Route index element={<Main />} /> */}
            <Route path="animeList/:nameOfAnimeList" element={<SearchedAnime />} >
              <Route path="animeTitle/:nameOfAnimeTitle" element={<AnimeInformation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;


{/* <SearchedAnime /> */ }
{/* <Route path="anime=" element={<AnimeInformation />} /> */ }

{/*  <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
{/* <Route
              path="*"
              element={<Navigate to="/" />}
            /> */}
{/* <UserList /> */ }