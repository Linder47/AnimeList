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
    }
}

export const animeReducer = (state = initialState, action: AnimeAction): AnimeState => {
    switch (action.type) {
        case AnimeActionTypes.ADD_ANIME:
            return { anime: action.payload.anime};
        default:
            return state;
    }
}