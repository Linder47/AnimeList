import axios from "axios"
import { Dispatch } from "redux"
import { AnimeListAction, AnimeListActionTypes } from "../../types/topAnimeList"
import { xRapidapiHost, xRapidapiKey } from '../../apiKeys';

const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
  headers: {
    "x-rapidapi-host": xRapidapiHost,
    "x-rapidapi-key": xRapidapiKey,
    "accept": "application/json"
  }
};

export const fetchTopAnimeList = (page = 1, limit = 10) => { //все равно сервер целиком отправляет, а не по странично
  return async (dispatch: Dispatch<AnimeListAction>) => {
        try {
            dispatch({type: AnimeListActionTypes.FETCH_ANIME_LIST })
            const response = await axios.request({url: options.url, method: 'GET', headers: options.headers,
            params: {page: page, limit: limit}} )
            dispatch({type: AnimeListActionTypes.FETCH_ANIME_LIST_SUCCESS , payload: response.data.top})
        } catch (e) {
            dispatch({type: AnimeListActionTypes.FETCH_ANIME_LIST_ERROR, payload: 'Ошибка при загрузке пользователей'})
        }
    }
}

export function setAnimeListPage(page: number): AnimeListAction {
  return {type: AnimeListActionTypes.SET_ANIME_LIST_PAGE, payload: page}
}