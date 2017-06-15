import { SHOW_PAST_EVENTS } from '../constants/constNavigation';


export default function showPastEvents(calendarAreaState, showAllEvents) {
    return dispatch => dispatch({
        type: SHOW_PAST_EVENTS,
        payload: {
            calendarAreaState,
            showAllEvents,
        },
    });
}
