export interface SearchedAnimeListState {
    animeList: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum SearchedAnimeTypes {
    FETCH_SEARCHED_ANIME = 'FETCH_SEARCHED_ANIME',
    FETCH_SEARCHED_ANIME_SUCCESS = 'FETCH_SEARCHED_ANIME_SUCCESS',
    FETCH_SEARCHED_ANIME_ERROR = 'FETCH_SEARCHED_ANIME_ERROR',
    SET_SEARCHED_ANIME_PAGE = 'SET_SEARCHED_ANIME_PAGE'
}

interface FetchSearchedAnimeAction {
    type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME
}

interface FetchSearchedAnimeSuccessAction {
    type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_SUCCESS,
    payload: any[]
}

interface FetchSearchedAnimeErrorAction {
    type: SearchedAnimeTypes.FETCH_SEARCHED_ANIME_ERROR,
    payload: string
}

interface SetSearchedAnimeAction {
    type: SearchedAnimeTypes.SET_SEARCHED_ANIME_PAGE,
    payload: number
}

export type SearchedAnimeAction = FetchSearchedAnimeAction
    | FetchSearchedAnimeSuccessAction
    | FetchSearchedAnimeErrorAction
    | SetSearchedAnimeAction;
