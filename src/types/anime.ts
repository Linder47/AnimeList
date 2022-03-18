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
    }
}

export enum AnimeActionTypes {
    ADD_ANIME = 'ADD_ANIME_INFORMATION'
}

interface Anime {
    type: AnimeActionTypes.ADD_ANIME;
    payload: {[key: string]: any};
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
}

export type AnimeAction = Anime;