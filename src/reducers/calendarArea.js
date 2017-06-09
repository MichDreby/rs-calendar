

import { SEND_REQUEST } from '../constants/constCalendarArea';


const initialState = {
    eventObj: [],
};

export default function calendarArea(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SEND_REQUEST:
            newState.eventObj = action.payload;
            return newState;

        default:
            return state;
    }
}
