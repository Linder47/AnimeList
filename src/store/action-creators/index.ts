import * as UserActionCreators from './user';
import * as TopAnimeListActionCreators from './topAnimeList';
import * as SearchedAnimeActionCreators from './searchedAnimeList';
import * as AnimeActionCreators from './anime';

export default {
    ...UserActionCreators,
    ...TopAnimeListActionCreators,
    ...SearchedAnimeActionCreators,
    ...AnimeActionCreators
};