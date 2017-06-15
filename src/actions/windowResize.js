

import WINDOW_RESIZE from '../constants/constApp';


export default function windowResize(windowSize) {
    return dispatch => dispatch({
        type: WINDOW_RESIZE,
        payload: windowSize,
    });
}
