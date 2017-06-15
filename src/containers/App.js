import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import CalendarArea from '../components/CalendarArea';
import EventDetails from '../components/EventDetails';
import Curtain from '../components/Curtain';
import FeedbackForm from '../components/FeedbackForm';

import { getPrevMonth, getNextMonth, getTodayMonth } from '../actions/changeMonth';
import { getPrevWeek, getNextWeek, getTodayWeek } from '../actions/changeWeek';
import changeNavType from '../actions/changeNavType';
import hidePastEvents from '../actions/hidePastEvents';
import showPastEvents from '../actions/showPastEvents';
import sendInitialRequest from '../actions/sendInitialRequest';
import showEventDetails from '../actions/showEventDetails';
import changeFeedbackForm from '../actions/changeFeedbackForm';
import submitFeedbackForm from '../actions/submitFeedbackForm';
import windowResize from '../actions/windowResize';


import isMobileDevice from '../helperFunctions/isMobileDevice';

class App extends Component {
    constructor() {
        super();
        this.windowResizeHandler = this.windowResizeHandler.bind(this);
    }
    componentDidMount() {
        this.windowResizeHandler();
        this.props.sendInitialRequest();
    }
    windowResizeHandler() {
        const html = document.documentElement;
        window.addEventListener('resize', () => {
            this.props.windowResize(this.props.windowSize);
        });
    }
    render() {
        const nav = this.props.navigation;
        const eventObj = this.props.calendarArea.eventObj;
        const calendarAreaState = this.props.calendarArea;
        const cellEventObj = this.props.eventDetails.cellEventObj;
        const curtainData = this.props.curtain;
        const feedbackFormData = this.props.feedbackForm;
        const { getPrevMonth, getNextMonth, getTodayMonth,
                getPrevWeek, getNextWeek, getTodayWeek, changeNavType,
                showEventDetails, changeFeedbackForm, submitFeedbackForm,
                hidePastEvents, showPastEvents } = this.props;
        const windowSize = this.props.windowSize;
        return (
          <section
            style={{ height: `${windowSize.clientHeight}px`, width: `${windowSize.clientWidth}px` }}
            className="rs-calendar clear-fix"
          >
            <div className="clndr-ctn fl-left">
              <Navigation
                dateObj={nav.dateObj} dateString={nav.getDateString()}
                getPrevMonth={getPrevMonth} getNextMonth={getNextMonth}
                getPrevWeek={getPrevWeek} getNextWeek={getNextWeek}
                getTodayMonth={getTodayMonth} getTodayWeek={getTodayWeek}
                changeNavType={changeNavType} hidePastEvents={hidePastEvents}
                showPastEvents={showPastEvents} navType={nav.navType}
                showAllEvents={nav.showAllEvents} calendarAreaState={calendarAreaState}
              />
              <CalendarArea
                dateObj={nav.dateObj} navType={nav.navType} eventObj={eventObj}
                getPrevMonth={getPrevMonth} getNextMonth={getNextMonth}
                getPrevWeek={getPrevWeek} getNextWeek={getNextWeek}
                showEventDetails={showEventDetails} windowSize={windowSize}
              />
            </div>
            <EventDetails
              cellEventObj={cellEventObj}
              feedbackFormData={feedbackFormData}
              changeFeedbackForm={changeFeedbackForm}
              submitFeedbackForm={submitFeedbackForm}
            />
            <Curtain curtainData={curtainData} />
          </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        navigation: state.navigation,
        calendarArea: state.calendarArea,
        eventDetails: state.eventDetails,
        curtain: state.curtain,
        feedbackForm: state.feedbackForm,
        windowSize: state.windowSize,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPrevMonth: bindActionCreators(getPrevMonth, dispatch),
        getNextMonth: bindActionCreators(getNextMonth, dispatch),
        getTodayMonth: bindActionCreators(getTodayMonth, dispatch),
        getPrevWeek: bindActionCreators(getPrevWeek, dispatch),
        getNextWeek: bindActionCreators(getNextWeek, dispatch),
        getTodayWeek: bindActionCreators(getTodayWeek, dispatch),
        changeNavType: bindActionCreators(changeNavType, dispatch),
        hidePastEvents: bindActionCreators(hidePastEvents, dispatch),
        showPastEvents: bindActionCreators(showPastEvents, dispatch),
        sendInitialRequest: bindActionCreators(sendInitialRequest, dispatch),
        showEventDetails: bindActionCreators(showEventDetails, dispatch),
        changeFeedbackForm: bindActionCreators(changeFeedbackForm, dispatch),
        submitFeedbackForm: bindActionCreators(submitFeedbackForm, dispatch),
        windowResize: bindActionCreators(windowResize, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
