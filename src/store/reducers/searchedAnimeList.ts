import { SearchedAnimeListState, SearchedAnimeAction, SearchedAnimeTypes } from "../../types/searchedAnimeList";

const initialState: SearchedAnimeListState = {
    animeList: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

console.log('we re in a fetch block yeah');

export const searchedAnimeListReducer = (state = initialState, action: SearchedAnimeAction): SearchedAnimeListState => {
    switch (action.type) {
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME:
            console.log('fetching');
            return { ...state, loading: true }
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME_SUCCESS:
            console.log('got results! ' + action.payload);
            return { ...state, loading: false, animeList: action.payload }
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SearchedAnimeTypes.SET_SEARCHED_ANIME_PAGE:
            return { ...state, loading: false, page: action.payload }
        default:
            return state;
    }
}