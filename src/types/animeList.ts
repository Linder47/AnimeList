export interface AnimeListState {
    animeList: any[];
    loading: boolean;
    error: null | string;
}

export enum AnimeListActionTypes {
    FETCH_ANIME_LIST = 'FETCH_ANIME_LIST',
    FETCH_ANIME_LIST_SUCCESS = 'FETCH_ANIME_LIST_SUCCESS',
    FETCH_ANIME_LIST_ERROR = 'FETCH_ANIME_LIST_ERROR'
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

export type AnimeListType = FetchAnimeList | FetchAnimeListSuccess | FetchAnimeListError;