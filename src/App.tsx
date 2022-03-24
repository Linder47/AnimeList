import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchedAnime from './components/SearchedAnime/SearchedAnime';
import AnimeInformation from './components/AnimeInformation/AnimeInformation';
import NotFound from './components/NotFound/NotFound';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="animeList/:nameOfAnimeList" element={<SearchedAnime />} >
              <Route path="anime/:animeID" element={<AnimeInformation />} />
            </Route>
            <Route path="anime/:animeID" element={<AnimeInformation />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;