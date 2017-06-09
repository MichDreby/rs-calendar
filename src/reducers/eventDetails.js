

import { SHOW_DETAILS } from '../constants/constEventDetails';

const initialState = {
    cellEventObj: [],
};

export default function eventDetails(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SHOW_DETAILS:
            newState.cellEventObj = action.payload;
            return newState;
        default:
            return state;
    }
}
