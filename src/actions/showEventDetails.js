

import SHOW_DETAILS from '../constants/constEventDetails';


export default function showEventDetails(cellEventObj) {
    return dispatch => dispatch({
        type: SHOW_DETAILS,
        payload: cellEventObj,
    });
}
