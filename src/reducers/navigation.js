import { PREV_MONTH, NEXT_MONTH, TODAY_MONTH,
         PREV_WEEK, NEXT_WEEK, TODAY_WEEK, NAV_TYPE,
         SHOW_PAST_EVENTS, HIDE_PAST_EVENTS } from '../constants/constNavigation';

const initialState = {
    dateObj: new Date(),
    navType: 'month',
    getDateString() {
        const formatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
        });
        return formatter.format(this.dateObj);
    },
    showAllEvents: true,
};

export default function navigation(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
    case PREV_MONTH: {
        newState.dateObj = new Date(action.payload.getMonth() !== 0 ?
            action.payload.getFullYear() : action.payload.getFullYear() - 1,
            action.payload.getMonth() !== 0 ? action.payload.getMonth() - 1 : 11);
        return newState;
    }

    case NEXT_MONTH: {
        newState.dateObj = new Date(action.payload.getMonth() !== 11 ?
            action.payload.getFullYear() :
            action.payload.getFullYear() + 1,
            action.payload.getMonth() !== 11 ? action.payload.getMonth() + 1 : 0);
        return newState;
    }
    case TODAY_MONTH: {
        newState.dateObj = new Date();
        return newState;
    }

    case PREV_WEEK: {
        newState.dateObj = new Date(action.payload.getFullYear(),
                                    action.payload.getMonth(),
                                    action.payload.getDate() - 7);
        return newState;
    }
    case NEXT_WEEK: {
        newState.dateObj = new Date(action.payload.getFullYear(),
                                    action.payload.getMonth(),
                                    action.payload.getDate() + 7);
        return newState;
    }
    case TODAY_WEEK: {
        newState.dateObj = new Date();
        return newState;
    }

    case NAV_TYPE: {
        newState.navType = action.payload.navType;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();
        const stateYear = action.payload.dateObj.getFullYear();
        const stateMonth = action.payload.dateObj.getMonth();
        if (currentYear === stateYear && currentMonth === stateMonth) {
            newState.dateObj = new Date(currentYear, currentMonth, currentDay);
        } else {
            newState.dateObj = new Date(stateYear, stateMonth, 1);
        }
        return newState;
    }
    case SHOW_PAST_EVENTS: {
        newState.showAllEvents = !action.payload.showAllEvents;
        return newState;
    }
    case HIDE_PAST_EVENTS: {
        newState.showAllEvents = !action.payload.showAllEvents;
        return newState;
    }

    default:
        return state;
    }
}
