import { AnimeAction, AnimeActionTypes } from "../../types/anime";
import { Dispatch } from "redux"
import { AnimeState } from "../../types/anime";

export const addAnimeInfo = (anime: AnimeState) => {
    return (dispatch: Dispatch<AnimeAction>) => {
        dispatch({ type: AnimeActionTypes.ADD_ANIME, payload: { anime } })
    }
}