

import { SEND_INITIAL_REQUEST } from '../constants/constCalendarArea';


export function sendInitialRequest() {
    return (dispatch) => dispatch({
        type: SEND_INITIAL_REQUEST,
    });
}
