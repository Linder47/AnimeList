import { AnimeAction, AnimeActionTypes } from "../../types/anime";
import { Dispatch } from "redux"

export const addAnimeInfo = (anime: object) => {
    return (dispatch: Dispatch<AnimeAction>) => {
        dispatch({ type: AnimeActionTypes.ADD_ANIME, payload: anime })
    }
}