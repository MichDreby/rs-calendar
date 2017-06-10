import { combineReducers } from 'redux';
import calendarArea from './calendarArea';
import navigation from './navigation';
import eventDetails from './eventDetails';

export default combineReducers({
    navigation,
    calendarArea,
    eventDetails,
});
