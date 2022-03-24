import axios from "axios"
import { Dispatch } from "redux"
import { AnimeListAction, AnimeListActionTypes } from "../../types/topAnimeList"
//import { UserAction,UserActionTypes } from "../../types/user"

const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
  headers: {
    "x-rapidapi-host": 'jikan1.p.rapidapi.com',
    "x-rapidapi-key": 'cb281bf8d5msh799df525a68bb13p11e752jsn7393e485ae25',
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

//https://anilist.co/

 /* axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */

// axios.defaults.baseURL = 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming';
// axios.defaults.headers.common['x-rapidapi-host']='jikan1.p.rapidapi.com';
// axios.defaults.headers.common['x-rapidapi-key'] = 'cb281bf8d5msh799df525a68bb13p11e752jsn7393e485ae25';
// axios.defaults.method = 'GET';

//response = unirest.get("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
//  headers={
//    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
//    "X-RapidAPI-Key": "4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//    "accept": "application/json"
 
//)