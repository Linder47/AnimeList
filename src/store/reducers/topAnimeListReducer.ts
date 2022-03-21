import { AnimeListState, AnimeListAction, AnimeListActionTypes } from "../../types/topAnimeList";

const initialState: AnimeListState = {
    topAnimeList: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

console.log('we re in a list block hmhmmhmhm');

export const topAnimeListReducer = (state = initialState, action: AnimeListAction): AnimeListState => {
    switch (action.type) {
        case AnimeListActionTypes.FETCH_ANIME_LIST:
            return { ...state, loading: true };
        case AnimeListActionTypes.FETCH_ANIME_LIST_SUCCESS:
            return { ...state, topAnimeList: action.payload, loading: false };
        case AnimeListActionTypes.FETCH_ANIME_LIST_ERROR:
            return { ...state, loading: false, error: action.payload };
            case AnimeListActionTypes.SET_ANIME_LIST_PAGE:
            return {...state, loading: false, page: action.payload}

        default:
            return state;

    }
}