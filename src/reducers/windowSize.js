import WINDOW_RESIZE from '../constants/constApp';

const initialState = {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight,
};

export default function windowSize(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
    case WINDOW_RESIZE:
        newState.clientWidth = document.documentElement.clientWidth;
        newState.clientHeight = document.documentElement.clientHeight;
        return newState;
    default:
        return state;
    }
}
