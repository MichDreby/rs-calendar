

import { CHANGE_FEEDBACKFORM } from '../constants/constFeedbackForm';


export default function changeFeedbackForm(inputText) {
    return dispatch => dispatch({
        type: CHANGE_FEEDBACKFORM,
        payload: inputText,
    });
}
