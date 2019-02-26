export const ADD_GAME_BEGIN = '@@games/ADD_GAME_BEGIN';
export const ADD_GAME_SUCCESS = '@@games/ADD_GAME_SUCCESS';
export const ADD_GAME_ERROR = '@@games/ADD_GAME_ERROR';

export const addGameBegin = () => {
    return { type: ADD_GAME_BEGIN }
};

export const addGameSuccess = game => {
    return { type: ADD_GAME_SUCCESS, payload: { game } }
};

export const addGameError = error => {
    return { type: ADD_GAME_ERROR, payload: { error } }
};

export function addGame(game) {
    return dispatch => {
        dispatch(addGameBegin());
        return fetch('/api/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...game })
        })
            .then(response => response.json())
            .then(game => dispatch(addGameSuccess(game)))
            .catch(error => dispatch(addGameError(error)))
    }
}