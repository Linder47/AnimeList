import { AnimeListState, AnimeListAction, AnimeListActionTypes } from "../../types/animeList";

const initialState: AnimeListState = {
    animeList: [],
    loading: false,
    error: null
}

export const animeListReducer = (state = initialState, action: AnimeListAction): AnimeListState => {
    switch (action.type) {
        case AnimeListActionTypes.FETCH_ANIME_LIST:
            return { animeList: [], loading: true, error: null };
        case AnimeListActionTypes.FETCH_ANIME_LIST_SUCCESS:
            return { animeList: action.payload, loading: false, error: null };
        case AnimeListActionTypes.FETCH_ANIME_LIST_ERROR:
            return { animeList: [], loading: false, error: action.payload };

        default:
            return state;

    }
}