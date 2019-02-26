import { FETCH_GAME_BEGIN, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR } from "../Actions/Game/FetchGame";

const initialState = {
    game: null,
    error: null
};

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME_BEGIN:
            return {
                ...state,
                error: null
            };
        case FETCH_GAME_SUCCESS:
            return {
                ...state,
                game: { ...action.payload.game }
            };
        case FETCH_GAME_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}