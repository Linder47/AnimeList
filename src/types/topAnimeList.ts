export interface AnimeListState {
    topAnimeList: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum AnimeListActionTypes {
    FETCH_ANIME_LIST = 'FETCH_ANIME_LIST',
    FETCH_ANIME_LIST_SUCCESS = 'FETCH_ANIME_LIST_SUCCESS',
    FETCH_ANIME_LIST_ERROR = 'FETCH_ANIME_LIST_ERROR',
    SET_ANIME_LIST_PAGE = 'SET_ANIME_LIST_PAGE'
}

interface FetchAnimeList {
    type: AnimeListActionTypes.FETCH_ANIME_LIST;
}

interface FetchAnimeListSuccess {
    type: AnimeListActionTypes.FETCH_ANIME_LIST_SUCCESS;
    payload: any[];
}

interface FetchAnimeListError {
    type: AnimeListActionTypes.FETCH_ANIME_LIST_ERROR;
    payload: string;
}

interface SetAnimeListPage {
    type: AnimeListActionTypes.SET_ANIME_LIST_PAGE;
    payload: number;
}

export type AnimeListAction = FetchAnimeList | FetchAnimeListSuccess | FetchAnimeListError | SetAnimeListPage;