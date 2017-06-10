import { PREV_MONTH, NEXT_MONTH, TODAY_MONTH } from '../constants/constNavigation';

export function getPrevMonth(date) {
    return dispatch => dispatch({
        type: PREV_MONTH,
        payload: date,
    });
}

export function getNextMonth(date) {
    return dispatch => dispatch({
        type: NEXT_MONTH,
        payload: date,
    });
}

export function getTodayMonth(date) {
    return dispatch => dispatch({
        type: TODAY_MONTH,
        payload: date,
    });
}
