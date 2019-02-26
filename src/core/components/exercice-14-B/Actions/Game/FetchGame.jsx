export const FETCH_GAME_BEGIN = 'FETCH_GAME_BEGIN';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_ERROR = 'FETCH_GAME_ERROR';

export const fetchGameBegin = () => {
    return { type: FETCH_GAME_BEGIN }
};

export const fetchGameSuccess = game => {
    return { type: FETCH_GAME_SUCCESS, game }
};

export const fetchGameError = error => {
    return { type: FETCH_GAME_ERROR, error }
};

export function fetchGame(gameId) {
    return dispatch => {
        dispatch(fetchGameBegin());
        return fetch(`http://localhost:5010/api/game/${ gameId }`)
            .then(response => response.json())
            .then(game => dispatch(fetchGameSuccess(game)))
            .catch(error => dispatch(fetchGameError(error)))
    }
}