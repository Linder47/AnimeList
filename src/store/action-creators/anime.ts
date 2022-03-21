import { AnimeAction, AnimeActionTypes } from "../../types/anime";
import { Dispatch } from "redux"
import { AnimeState } from "../../types/anime";

export const addAnimeInfo = (anime: AnimeState) => { 
    console.log('мы в диспатче. чо по аниме? ' + anime)
    return (dispatch: Dispatch<AnimeAction>) => {
        console.log('еще раз в адданиме ' + anime);
        console.log('еще раз в адданиме 2 eee ' +  {anime} ); //WOW ЗАРАБОТАЛО
        dispatch({ type: AnimeActionTypes.ADD_ANIME, payload: { anime } })
    }
}