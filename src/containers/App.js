import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import CalendarArea from '../components/CalendarArea';
import EventDetails from '../components/EventDetails';
import Curtain from '../components/Curtain';
import FeedbackForm from '../components/FeedbackForm';

import * as actions from '../actions/actions';

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
        getPrevMonth: bindActionCreators(actions.getPrevMonth, dispatch),
        getNextMonth: bindActionCreators(actions.getNextMonth, dispatch),
        getTodayMonth: bindActionCreators(actions.getTodayMonth, dispatch),
        getPrevWeek: bindActionCreators(actions.getPrevWeek, dispatch),
        getNextWeek: bindActionCreators(actions.getNextWeek, dispatch),
        getTodayWeek: bindActionCreators(actions.getTodayWeek, dispatch),
        changeNavType: bindActionCreators(actions.changeNavType, dispatch),
        hidePastEvents: bindActionCreators(actions.hidePastEvents, dispatch),
        showPastEvents: bindActionCreators(actions.showPastEvents, dispatch),
        sendInitialRequest: bindActionCreators(actions.sendInitialRequest, dispatch),
        showEventDetails: bindActionCreators(actions.showEventDetails, dispatch),
        changeFeedbackForm: bindActionCreators(actions.changeFeedbackForm, dispatch),
        submitFeedbackForm: bindActionCreators(actions.submitFeedbackForm, dispatch),
        windowResize: bindActionCreators(actions.windowResize, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
