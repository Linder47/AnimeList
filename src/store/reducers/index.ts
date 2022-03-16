import {combineReducers} from 'redux';
import { animeListReducer } from './animeListReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    animeList: animeListReducer,
})

export type RootState = ReturnType<typeof rootReducer>; 