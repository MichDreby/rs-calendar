import { HIDE_PAST_EVENTS } from '../constants/constNavigation';


export default function hidePastEvents(calendarAreaState, showAllEvents) {
    return dispatch => dispatch({
        type: HIDE_PAST_EVENTS,
        payload: {
            calendarAreaState,
            showAllEvents,
        },
    });
}
