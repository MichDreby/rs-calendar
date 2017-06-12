import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import CalendarArea from '../components/CalendarArea';
import EventDetails from '../components/EventDetails';

import { getPrevMonth, getNextMonth, getTodayMonth } from '../actions/changeMonth';
import { getPrevWeek, getNextWeek, getTodayWeek } from '../actions/changeWeek';
import changeNavType from '../actions/changeNavType';
import sendInitialRequest from '../actions/sendInitialRequest';
import showEventDetails from '../actions/showEventDetails';

class App extends Component {
    componentDidMount() {
        this.props.sendInitialRequest();
    }
    render() {
        const nav = this.props.navigation;
        const eventObj = this.props.calendarArea.eventObj;
        const cellEventObj = this.props.eventDetails.cellEventObj;
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
            <EventDetails cellEventObj={cellEventObj} />
          </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        navigation: state.navigation,
        calendarArea: state.calendarArea,
        eventDetails: state.eventDetails,
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
