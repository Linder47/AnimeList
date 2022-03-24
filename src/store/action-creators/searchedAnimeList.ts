import axios from "axios"
import { Dispatch } from "redux"
import { SearchedAnimeAction, SearchedAnimeTypes } from "../../types/searchedAnimeList"

var options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/search/anime',
    params: { q: 'Attack on Titan' },
    headers: {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': 'cb281bf8d5msh799df525a68bb13p11e752jsn7393e485ae25'
    }
};
//Проблема на серваке, при указании страницы >1 выдает рандомное аниме.

export const fetchSearchedAnimeList = (title: string, page = 1, limit = 10) => {
    console.log(title + ' ' + page + '  ' + limit);
    return async (dispatch: Dispatch<SearchedAnimeAction>) => {
        try {
            dispatch({ type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME })
            console.log('title ' + title + ' page ' + page + ' limit ' + limit);
            const response = await axios.request({
                url: options.url, method: 'GET',
                headers: options.headers, params: { q: title.toLowerCase(), limit: '24'} //, page: page, limit: limit
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


//console.log({url: options.url, method: 'GET', headers: options.headers, params: {q: title} })