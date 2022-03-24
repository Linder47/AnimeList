import { AnimeAction, AnimeActionTypes, AnimeState } from "../../types/anime";

const initialState: AnimeState = {
    anime: {
        image_url: "",
        title: "",
        airing: false,
        end_date: "",
        episodes: 0,
        mal_id: 0,
        score: 0,
        start_date: "",
        synopsis: "",
        url: "",
        rated: "",
        members: 0,
    },
    loading: false,
    error: null
}

export const animeReducer = (state = initialState, action: AnimeAction): AnimeState => {
    switch (action.type) {
        case AnimeActionTypes.ADD_ANIME:
            return { ...state, anime: action.payload.anime };
        case AnimeActionTypes.FETCH_ANIME:
            return { ...state, loading: true };
        case AnimeActionTypes.FETCH_ANIME_SUCCESS:
            return { ...state, loading: false, anime: action.payload.anime };
        case AnimeActionTypes.FETCH_ANIME_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}