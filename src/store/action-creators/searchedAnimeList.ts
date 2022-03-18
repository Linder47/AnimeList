import axios from "axios"
import { Dispatch } from "redux"
import { SearchedAnimeAction, SearchedAnimeTypes } from "../../types/searchedAnimeList"

var options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/search/anime',
    params: {q: 'Attack on Titan'},
    headers: {
      'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      'x-rapidapi-key': 'cb281bf8d5msh799df525a68bb13p11e752jsn7393e485ae25'
    }
  };

export const fetchSearchedAnimeList = (title: string) => {
    console.log(title);
    return async (dispatch: Dispatch<SearchedAnimeAction>) => {
        try {
            dispatch({type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME})
            const response = await axios.request({url: options.url, method: 'GET', headers: options.headers, params: {q: title} })
            dispatch({type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_SUCCESS, payload: response.data.results})
            //console.log({url: options.url, method: 'GET', headers: options.headers, params: {q: title} })
        } catch (e) {
            dispatch({type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_ERROR, payload: 'Ошибка при загрузке искомого аниме'})
        }
    }
}