import React, { Component } from 'react';
import DeadlineEvent from './DeadlineEvent';
import OtherEvent from './OtherEvent';
import FeedbackForm from './FeedbackForm';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class EventDetails extends Component {
    convertDateFromStr(dateStr) {
        const millisec = Date.parse(dateStr);
        const date = new Date(millisec);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        }
        return (date.toLocaleString('ru', options));
    }
    convertDateFromObj(dateObj) {
        const date = dateObj;
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
        return (date.toLocaleString('en', options));
    }
    render() {
        const eventsCollection = this.props.cellEventObj;
        let eventsTemplate =[];
        let cellDate = [];
        if(eventsCollection.length !== 0) {
            if (eventsCollection[0].type !== 'emptyDay') {
                eventsTemplate = eventsCollection.map((item, index) => {
                    switch (item.type) {
                        case 'deadline':
                            return (
                                <div className={'event-ctn ' + item.type + '-event'} key={index}>
                                    <DeadlineEvent convertDateFromStr={this.convertDateFromStr}
                                        cellEventObj={item} />
                                    <FeedbackForm eventType={item.type}/>
                                </div>
                            );
                        default:
                            return (
                                <div className={'event-ctn ' + item.type + '-event'} key={index}>
                                    <OtherEvent convertDateFromStr={this.convertDateFromStr}
                                        cellEventObj={item} />
                                    {<FeedbackForm eventType={item.type}/>}
                                </div>
                            );
                    };
                });
            }
            cellDate = (
                <h3 className="details-date">{this.convertDateFromObj(eventsCollection[0].date)}</h3>
            );
        }
        return (
            <div className={'event-details-ctn text-center fl-left ' +
                (isMobileDevice() ? ' ' : ' ')}>
                { cellDate }
                { eventsTemplate }
            </div>
        )
    }
}
