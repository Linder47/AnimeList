import { AnimeAction, AnimeActionTypes } from "../../types/anime";
import { Dispatch } from "redux"
import { AnimeState } from "../../types/anime";
import axios from "axios";

export const addAnimeInfo = (anime: AnimeState) => {
    return (dispatch: Dispatch<AnimeAction>) => {
        dispatch({ type: AnimeActionTypes.ADD_ANIME, payload: { anime } })
    }
}

var options = {
    method: 'GET',
    baseUrl: 'https://jikan1.p.rapidapi.com/anime',
    params: { request: 'moreinfo' },
    headers: {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': 'cb281bf8d5msh799df525a68bb13p11e752jsn7393e485ae25'
    }
};

// export const addAnimeInfoFromURL = (animeID: number | string) => {
//     const URL = `${options.baseUrl}/${animeID}/news`;
//     console.log(URL);
//     return async (dispatch: Dispatch<AnimeAction>) => {
//         try {
//             dispatch({ type: AnimeActionTypes.FETCH_ANIME })
//             const response = await axios.request({
//                 url: URL, method: 'GET',
//                 headers: options.headers  //params: { request: options.params.request, id: animeID.toString()
//             })
//             console.log('был респонс ' + response.data);
//             console.log('был респонс ' + response.data.results);
//             dispatch({ type: AnimeActionTypes.FETCH_ANIME_SUCCESS, payload: response.data.results })
//         } catch (e) {
//             console.log('а не, ошибочкин ' + e)
//             dispatch({
//                 type: AnimeActionTypes.FETCH_ANIME_ERROR,
//                 payload: 'Ошибка при загрузке искомого аниме по ссылке'
//             })
//         }
//     }
// }



// const response = await axios.request({
//     url: options.baseUrl, method: 'GET',
//     headers: options.headers, params: { type: 'anime', period: 'today', request: 'requests'} //, page: page, limit: limit
// })