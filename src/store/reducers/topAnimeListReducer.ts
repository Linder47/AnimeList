import { AnimeListState, AnimeListAction, AnimeListActionTypes } from "../../types/topAnimeList";

const initialState: AnimeListState = {
    topAnimeList: [],
    loading: false,
    error: null
}

console.log('we re in a list block hmhmmhmhm');

export const topAnimeListReducer = (state = initialState, action: AnimeListAction): AnimeListState => {
    switch (action.type) {
        case AnimeListActionTypes.FETCH_ANIME_LIST:
            return { topAnimeList: [], loading: true, error: null };
        case AnimeListActionTypes.FETCH_ANIME_LIST_SUCCESS:
            return { topAnimeList: action.payload, loading: false, error: null };
        case AnimeListActionTypes.FETCH_ANIME_LIST_ERROR:
            return { topAnimeList: [], loading: false, error: action.payload };

        default:
            return state;

    }
}