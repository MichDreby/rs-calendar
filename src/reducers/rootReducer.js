import { combineReducers } from 'redux';
import calendarArea from './calendarArea';
import navigation from './navigation';
import eventDetails from './eventDetails';
import curtain from './curtain';
import feedbackForm from './feedbackForm';

export default combineReducers({
    navigation,
    calendarArea,
    eventDetails,
    curtain,
    feedbackForm,
});
