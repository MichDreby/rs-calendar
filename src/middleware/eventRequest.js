

import { SEND_INITIAL_REQUEST } from '../constants/constCalendarArea';
import { SEND_REQUEST } from '../constants/constCalendarArea';
import { SHOW_DETAILS } from '../constants/constEventDetails';


export const eventRequest = store => next => action => {
    switch (action.type) {
        case SEND_INITIAL_REQUEST:
            const eventURL = 'http://128.199.53.150/events';
            const addMoreData = function addMoreData(eventObj) {
                if(eventObj.type === 'deadline') {
                    const maxScore = Math.ceil(Math.random() * 10) * 10;
                    const placeToPush = (Math.random() > 0.5 ?
                        'private repository' : 'gh-pages');
                    const supervisor = (Math.random() > 0.5 ?
                        'menthor' : (Math.random() > 0.5 ?
                        'A. Volchenko' : (Math.random() > 0.5 ? 'Y. Halushka' : 'M. Shatsel')));
                    eventObj.typeOfScore = `0-${maxScore}`;
                    eventObj.placeToPush = placeToPush;
                    eventObj.supervisor = supervisor;
                }
                else if(eventObj.type === 'lecture' || eventObj.type === 'webinar') {
                    eventObj.videoLink = `https://www.youtube.com/watch?v=8aGhZQkoFbQ`;
                    eventObj.slidesLink = `https://slides.com/`;
                    eventObj.otherLink = `https://learn.javascript.ru/ajax`;
                }
            }
            fetch(eventURL).then(response => response.json()).then(response => {
                response.forEach((eventObj) => {
                    addMoreData(eventObj);
                });
                next({ type: SEND_REQUEST, payload: response });
            });
            break;
        case SHOW_DETAILS:
            let cellEventObj = action.payload;
            const trainerURL = 'http://128.199.53.150/trainers';
            // const addMoreData = function addMoreData(eventObj) {
            //     if(eventObj.type === 'deadline') {
            //         const maxScore = Math.ceil(Math.random() * 10) * 10;
            //         const placeToPush = (Math.random() > 0.5 ?
            //             'private repository' : 'gh-pages');
            //         const supervisor = (Math.random() > 0.5 ?
            //             'menthor' : (Math.random() > 0.5 ?
            //             'A. Volchenko' : (Math.random() > 0.5 ? 'Y. Halushka' : 'M. Shatsel')));
            //         eventObj.typeOfScore = `0-${maxScore}`;
            //         eventObj.placeToPush = placeToPush;
            //         eventObj.supervisor = supervisor;
            //     }
            //     else if(eventObj.type === 'lecture' || eventObj.type === 'webinar') {
            //         eventObj.videoLink = `https://www.youtube.com/watch?v=8aGhZQkoFbQ`;
            //         eventObj.slidesLink = `https://slides.com/`;
            //         eventObj.otherLink = `https://learn.javascript.ru/ajax`;
            //     }
            // }
            if (cellEventObj[0].type !== 'emptyDay') {
                // add more information to back-end
                // cellEventObj.forEach((eventObj) => {
                //     addMoreData(eventObj);
                // });
                // add speakersInfo
                Promise.all(cellEventObj.map(evtObj => {
                    return Promise.all(evtObj.speakers.map(speakerId => {
                        return fetch(`${trainerURL}/${speakerId}`).then(response => response.json());
                    }));
                }))
                .then(resolve => {
                    let newCellEventObj = cellEventObj.map(evtObj => evtObj);
                    newCellEventObj.forEach((evtObj, index) => {
                        evtObj.speakersInfo = resolve[index];
                    });
                    next({ type: SHOW_DETAILS, payload: newCellEventObj });
                });
            } else {
                next({ type: SHOW_DETAILS, payload: cellEventObj })
            }
            break;
        default:
        return next(action);
    }
}













//sxfgsf
