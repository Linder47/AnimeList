export interface AnimeState {
    anime: {
        image_url: string,
        title: string;
        airing: boolean;
        end_date: string;
        episodes: number;
        mal_id: number;
        score: number;
        start_date: string;
        synopsis: string;
        url: string;
        rated: string;
        members: number;
    },
    loading: boolean;
    error: null | string;
}

export enum AnimeActionTypes {
    ADD_ANIME = 'ADD_ANIME_INFORMATION',
    FETCH_ANIME = 'FETCH_ANIME_INFORMATION',
    FETCH_ANIME_SUCCESS = 'FETCH_ANIME_INFORMATION_SUCCESS',
    FETCH_ANIME_ERROR = 'FETCH_ANIME_INFORMATION_ERROR',
}

interface Anime {
    type: AnimeActionTypes.ADD_ANIME;
    payload: { [key: string]: any };
}

interface FetchAnimeAction {
    type: AnimeActionTypes.FETCH_ANIME;
}

interface FetchAnimeSuccessAction {
    type: AnimeActionTypes.FETCH_ANIME_SUCCESS,
    payload: any;
}

interface FetchAnimeErrorAction {
    type: AnimeActionTypes.FETCH_ANIME_ERROR,
    payload: string
}

export type AnimeAction = Anime | FetchAnimeAction | FetchAnimeSuccessAction | FetchAnimeErrorAction;


    //payload: Object;

    // anime: object;
    // title: string;
    // airing: boolean;
    // end_date: string;
    // episodes: number;
    // mal_id: number;
    // score: number;
    // start_date: string;
    // synopsis: string;
    // url: string;
    // rated: string;
    // members: number;