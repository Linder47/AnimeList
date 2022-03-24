import axios from "axios"
import { Dispatch } from "redux"
import { SearchedAnimeAction, SearchedAnimeTypes } from "../../types/searchedAnimeList"
import { xRapidapiHost, xRapidapiKey } from '../../apiKeys';

var options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/search/anime',
    params: { q: 'Attack on Titan' },
    headers: {
        'x-rapidapi-host': xRapidapiHost,
        'x-rapidapi-key': xRapidapiKey
    }
};
//Проблема на серваке, при указании страницы >1 выдает рандомное аниме.

export const fetchSearchedAnimeList = (title: string, page = 1, limit = 10) => {
    return async (dispatch: Dispatch<SearchedAnimeAction>) => {
        try {
            dispatch({ type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME })
            console.log('title ' + title + ' page ' + page + ' limit ' + limit);
            const response = await axios.request({
                url: options.url, method: 'GET',
                headers: options.headers, params: { q: title.toLowerCase(), limit: '24'} 
            })
            dispatch({ type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_SUCCESS, payload: response.data.results })
        } catch (e) {
            dispatch({
                type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_ERROR,
                payload: 'Ошибка при загрузке искомого аниме'
            })
        }
    }
}

export function setSearchedAnimePage(page: number): SearchedAnimeAction {
    return { type: SearchedAnimeTypes.SET_SEARCHED_ANIME_PAGE, payload: page }
}
