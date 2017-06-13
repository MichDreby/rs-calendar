import START_ANIMATION from '../constants/constCurtain';

const initialState = {
    animationTrigger: false,

};

export default function Curtain(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
    case START_ANIMATION:
        newState.animationTrigger = action.payload.animationTrigger;
        return newState;

    default:
        return state;
    }
}
