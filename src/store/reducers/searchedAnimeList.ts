import { SearchedAnimeListState, SearchedAnimeAction, SearchedAnimeTypes } from "../../types/searchedAnimeList";

const initialState: SearchedAnimeListState = {
    anime: [],
    loading: false,
    error: null,
}

console.log('we re in a fetch block yeah');

export const searchedAnimeListReducer = (state = initialState, action: SearchedAnimeAction): SearchedAnimeListState => {
    switch (action.type) {
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME:
            return { loading: true, anime: [], error: null }
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME_SUCCESS:
            return { loading: false, anime: action.payload, error: null }
        case SearchedAnimeTypes.FETCH_SEARCHED_ANIME_ERROR:
            return { loading: false, anime: [], error: action.payload}
        default:
            return state;
    }
}