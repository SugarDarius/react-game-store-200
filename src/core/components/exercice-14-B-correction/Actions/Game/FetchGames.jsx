export const FETCH_GAMES_BEGIN = '@@games/FETCH_GAMES_BEGIN';
export const FETCH_GAMES_SUCCESS = '@@games/FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = '@@games/FETCH_GAMES_ERROR';

export const fetchGamesBegin = () => {
    return { type: FETCH_GAMES_BEGIN }
};

export const fetchGamesSuccess = games => {
    return { type: FETCH_GAMES_SUCCESS, payload: { games } }
};

export const fetchGamesError = error => {
    return { type: FETCH_GAMES_ERROR, payload: { error } }
};

export function fetchGames() {
    return dispatch => {
        dispatch(fetchGamesBegin());
        return fetch('http://localhost:5010/api/games')
            .then(response => response.json())
            .then(games => dispatch(fetchGamesSuccess(games)))
            .catch(error => dispatch(fetchGamesError(error)))
    }
}