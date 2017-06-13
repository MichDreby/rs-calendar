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
import sendInitialRequest from '../actions/sendInitialRequest';
import showEventDetails from '../actions/showEventDetails';
import changeFeedbackForm from '../actions/changeFeedbackForm';
import submitFeedbackForm from '../actions/submitFeedbackForm';

class App extends Component {
    componentDidMount() {
        this.props.sendInitialRequest();
    }
    render() {
        const nav = this.props.navigation;
        const eventObj = this.props.calendarArea.eventObj;
        const cellEventObj = this.props.eventDetails.cellEventObj;
        const curtainData = this.props.curtain;
        const feedbackFormData = this.props.feedbackForm;
        const changeFeedbackForm = this.props.changeFeedbackForm;
        const submitFeedbackForm = this.props.submitFeedbackForm;
        const { getPrevMonth, getNextMonth, getTodayMonth,
                getPrevWeek, getNextWeek, getTodayWeek, changeNavType,
                showEventDetails } = this.props;
        const clientHeight = `${document.documentElement.clientHeight}px`;
        const clientWidth = `${document.documentElement.clientWidth}px`;
        return (
          <section
            className="rs-calendar clear-fix"
            style={{ height: clientHeight, width: clientWidth }}
          >
            <div className="clndr-ctn fl-left">
              <Navigation
                dateObj={nav.dateObj} dateString={nav.getDateString()}
                getPrevMonth={getPrevMonth} getNextMonth={getNextMonth}
                getPrevWeek={getPrevWeek} getNextWeek={getNextWeek}
                getTodayMonth={getTodayMonth} getTodayWeek={getTodayWeek}
                changeNavType={changeNavType}
                navType={nav.navType}
              />
              <CalendarArea
                dateObj={nav.dateObj} navType={nav.navType} eventObj={eventObj}
                getPrevMonth={getPrevMonth} getNextMonth={getNextMonth}
                getPrevWeek={getPrevWeek} getNextWeek={getNextWeek}
                showEventDetails={showEventDetails}
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
        sendInitialRequest: bindActionCreators(sendInitialRequest, dispatch),
        showEventDetails: bindActionCreators(showEventDetails, dispatch),
        changeFeedbackForm: bindActionCreators(changeFeedbackForm, dispatch),
        submitFeedbackForm: bindActionCreators(submitFeedbackForm, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
