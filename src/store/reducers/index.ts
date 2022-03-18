import {combineReducers} from 'redux';
import { topAnimeListReducer } from './topAnimeListReducer';
import { searchedAnimeListReducer } from './searchedAnimeList';
import { userReducer } from './userReducer';
import { animeReducer } from './animeReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    topAnimeList: topAnimeListReducer,
    searchedAnimeList: searchedAnimeListReducer,
    anime: animeReducer,
})

export type RootState = ReturnType<typeof rootReducer>; 