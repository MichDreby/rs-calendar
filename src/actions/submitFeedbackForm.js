

import { SUBMIT_FEEDBACKFORM } from '../constants/constFeedbackForm';


export default function submitFeedbackForm() {
    return dispatch => dispatch({
        type: SUBMIT_FEEDBACKFORM,
    });
}
