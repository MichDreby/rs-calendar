

import { PREV_WEEK, NEXT_WEEK, TODAY_WEEK } from '../constants/constNavigation';

export function getPrevWeek(date) {
    return (dispatch) => dispatch({
        type: PREV_WEEK,
        payload: date,
    });
}

export function getNextWeek(date) {
    return (dispatch) => dispatch({
        type: NEXT_WEEK,
        payload: date,
    });
}

export function getTodayWeek(date) {
    return (dispatch) => dispatch({
        type: TODAY_WEEK,
        payload: date,
    });
}
