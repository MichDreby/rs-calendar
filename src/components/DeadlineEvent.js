import React, { Component } from 'react';

export default class DeadlineEvent extends Component {

    render() {
        const convertDateFromStr = this.props.convertDateFromStr;
        const cellEventObj = this.props.cellEventObj;
        // const eventType = cellEventObj.type;
        const typeOfScore = cellEventObj.typeOfScore;
        const placeToPush = cellEventObj.placeToPush;
        const supervisor = cellEventObj.supervisor;
        return (
          <div className="event-box">
            <div className="event-descr-item header">
              <div className="event-header title-type-ctn">
                <p className="event-type">{cellEventObj.type.toUpperCase()}</p>
                <p className="event-title">{cellEventObj.title.toUpperCase()}</p>
              </div>
              <div className="event-header time">
                <p>{convertDateFromStr(cellEventObj.start)}</p>
              </div>
            </div>
            <div className="event-descr-item description">
              <p>{cellEventObj.description}</p>
            </div>

            <div className="event-descr-item points text-left">
              <span className="">type of score-points:</span>
              <span className="event-points">{typeOfScore}</span>
            </div>
            <div className="event-descr-item push-place text-left">
              <span className="">place to push:</span>
              <span className="event-push-place">{placeToPush}</span>
            </div>
            <div className="event-descr-item supervisor text-left">
              <span className="">supervisor:</span>
              <span className="event-supervisor">{supervisor}</span>
            </div>
          </div>
        );
    }
}
