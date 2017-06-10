
import { SEND_INITIAL_REQUEST } from '../constants/constCalendarArea';


export default function sendInitialRequest() {
    return dispatch => dispatch({
        type: SEND_INITIAL_REQUEST,
    });
}
