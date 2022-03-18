import React from 'react';
import UserList from './components/UserList';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchedAnime from './components/SearchedAnime/SearchedAnime';
import AnimeInformation from './components/AnimeInformation/AnimeInformation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
       
            <Route path="/" element={<Main />} />
               {/*<Route index element={<Main />} />*/}
              <Route path="/" element={<SearchedAnime />} />

             {/*</Route>*/}
            <Route path="anime=" element={<AnimeInformation />} />
         
          {/*  <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* <Route
              path="*"
              element={<Navigate to="/" />}
            /> */}

        </Routes>
      </BrowserRouter>
      {/* <UserList /> */}

    </div>
  );
}

export default App;
