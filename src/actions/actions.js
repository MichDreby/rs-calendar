import { CHANGE_FEEDBACKFORM, SUBMIT_FEEDBACKFORM } from '../constants/constFeedbackForm';
import { PREV_MONTH, NEXT_MONTH, TODAY_MONTH,
    PREV_WEEK, NEXT_WEEK, TODAY_WEEK,
    SHOW_PAST_EVENTS, HIDE_PAST_EVENTS, NAV_TYPE } from '../constants/constNavigation';
import { SEND_INITIAL_REQUEST } from '../constants/constCalendarArea';
import SHOW_DETAILS from '../constants/constEventDetails';
import WINDOW_RESIZE from '../constants/constApp';


export function changeFeedbackForm(inputText) {
    return dispatch => dispatch({
        type: CHANGE_FEEDBACKFORM,
        payload: inputText,
    });
}

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

export function changeNavType(navType, dateObj) {
    return dispatch => dispatch({
        type: NAV_TYPE,
        payload: {
            navType,
            dateObj,
        },
    });
}

export function getPrevWeek(date) {
    return dispatch => dispatch({
        type: PREV_WEEK,
        payload: date,
    });
}

export function getNextWeek(date) {
    return dispatch => dispatch({
        type: NEXT_WEEK,
        payload: date,
    });
}

export function getTodayWeek(date) {
    return dispatch => dispatch({
        type: TODAY_WEEK,
        payload: date,
    });
}

export function hidePastEvents(calendarAreaState, showAllEvents) {
    return dispatch => dispatch({
        type: HIDE_PAST_EVENTS,
        payload: {
            calendarAreaState,
            showAllEvents,
        },
    });
}

export function sendInitialRequest() {
    return dispatch => dispatch({
        type: SEND_INITIAL_REQUEST,
    });
}

export function showEventDetails(cellEventObj) {
    return dispatch => dispatch({
        type: SHOW_DETAILS,
        payload: cellEventObj,
    });
}

export function showPastEvents(calendarAreaState, showAllEvents) {
    return dispatch => dispatch({
        type: SHOW_PAST_EVENTS,
        payload: {
            calendarAreaState,
            showAllEvents,
        },
    });
}

export function submitFeedbackForm() {
    return dispatch => dispatch({
        type: SUBMIT_FEEDBACKFORM,
    });
}

export function windowResize(windowSize) {
    return dispatch => dispatch({
        type: WINDOW_RESIZE,
        payload: windowSize,
    });
}
