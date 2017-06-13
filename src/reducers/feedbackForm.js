import { CHANGE_FEEDBACKFORM, SUBMIT_FEEDBACKFORM } from '../constants/constFeedbackForm';

const initialState = {
    inputText: '',

};

export default function Curtain(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
    case CHANGE_FEEDBACKFORM:
        newState.inputText = action.payload.inputText;
        return newState;
    case SUBMIT_FEEDBACKFORM:
        newState.inputText = '';
        return newState;

    default:
        return state;
    }
}
