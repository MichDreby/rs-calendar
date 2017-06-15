import { SEND_REQUEST } from '../constants/constCalendarArea';
import { HIDE_PAST_EVENTS, SHOW_PAST_EVENTS } from '../constants/constNavigation';

const initialState = {
    eventObj: [],
};

export default function calendarArea(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
    case SEND_REQUEST:
        newState.eventObj = action.payload;
        newState.passedEventObj = action.payload.filter(cellEvtObj => cellEvtObj.isEventPassed);
        newState.futureEventObj = action.payload.filter(cellEvtObj => !cellEvtObj.isEventPassed);
        return newState;
    case HIDE_PAST_EVENTS: {
        const calendarAreaState = action.payload.calendarAreaState;
        newState.eventObj = calendarAreaState.futureEventObj;
        return newState;
    }
    case SHOW_PAST_EVENTS: {
        const calendarAreaState = action.payload.calendarAreaState;
        newState.eventObj = calendarAreaState.passedEventObj.concat(
            calendarAreaState.futureEventObj,
        );
        return newState;
    }
    default:
        return state;
    }
}
