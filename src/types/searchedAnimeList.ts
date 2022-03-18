export interface SearchedAnimeListState {
    anime: any[];
    loading: boolean;
    error: null | string;
}

export enum SearchedAnimeTypes {
        FETCH_SEARCHED_ANIME = 'FETCH_SEARCHED_ANIME',
        FETCH_SEARCHED_ANIME_SUCCESS = 'FETCH_SEARCHED_ANIME_SUCCESS',
        FETCH_SEARCHED_ANIME_ERROR = 'FETCH_SEARCHED_ANIME_ERROR'
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

export type SearchedAnimeAction= FetchSearchedAnimeAction | FetchSearchedAnimeSuccessAction | FetchSearchedAnimeErrorAction;
