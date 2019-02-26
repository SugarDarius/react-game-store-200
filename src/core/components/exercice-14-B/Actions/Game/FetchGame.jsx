export const FETCH_GAME_BEGIN = '@@games/FETCH_GAME_BEGIN';
export const FETCH_GAME_SUCCESS = '@@games/FETCH_GAME_SUCCESS';
export const FETCH_GAME_ERROR = '@@games/FETCH_GAME_ERROR';

export const fetchGameBegin = () => {
    return { type: FETCH_GAME_BEGIN }
};

export const fetchGameSuccess = game => {
    return { type: FETCH_GAME_SUCCESS, payload: { game } }
};

export const fetchGameError = error => {
    return { type: FETCH_GAME_ERROR, payload: { error } }
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