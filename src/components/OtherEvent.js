import React, { Component } from 'react';


export default class OtherEvent extends Component {

    render() {
        const convertDateFromStr = this.props.convertDateFromStr;
        const cellEventObj = this.props.cellEventObj;
        const eventType = cellEventObj.type;
        const videoLink = cellEventObj.videoLink;
        const slidesLink = cellEventObj.slidesLink;
        const otherLink = cellEventObj.otherLink;

        const lecturersName = cellEventObj.speakersInfo.map((speakerObj, index) => {
            return (
                <p key={index} className="event-lector">{speakerObj.name}</p>
            )
        });
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
                <div className="event-descr-item lectors">
                    {lecturersName}
                </div>

                <div className={'event-descr-item place ' +
                    (eventType === 'webinar' ? 'none' : ' ')}>
                    <p>{cellEventObj.location}</p>
                </div>

                <div className={'event-descr-item useful-links-ctn ' +
                    (eventType === ('lecture') ? ' ' :
                    (eventType === ('webinar') ? ' ' :'none'))}>

                    <div className="useful-link movie-link">
                        <a className="link" href={videoLink}>video</a>
                    </div>
                    <div className="useful-link slides-link">
                        <a className="link" href={slidesLink}>slides</a>
                    </div>
                    <div className="useful-link other-link">
                        <a className="link" href={otherLink}>other</a>
                    </div>
                </div>

            </div>
        )
    }
}
