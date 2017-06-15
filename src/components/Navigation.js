import React, { Component } from 'react';

export default class Navigation extends Component {
    constructor() {
        super();
        this.todayBtnHandler = this.todayBtnHandler.bind(this);
        this.prevBtnHandler = this.prevBtnHandler.bind(this);
        this.nextBtnHandler = this.nextBtnHandler.bind(this);
        this.changeNavTypeHandler = this.changeNavTypeHandler.bind(this);
        this.showEventsHandler = this.showEventsHandler.bind(this);
    }
    prevBtnHandler() {
        if (this.props.navType === 'month') {
            this.props.getPrevMonth(this.props.dateObj);
        } else if (this.props.navType === 'week') {
            this.props.getPrevWeek(this.props.dateObj);
        }
    }
    nextBtnHandler() {
        if (this.props.navType === 'month') {
            this.props.getNextMonth(this.props.dateObj);
        } else if (this.props.navType === 'week') {
            this.props.getNextWeek(this.props.dateObj);
        }
    }
    todayBtnHandler() {
        if (this.props.navType === 'month') {
            this.props.getTodayMonth(this.props.dateObj);
        } else if (this.props.navType === 'week') {
            this.props.getTodayWeek(this.props.dateObj);
        }
    }
    changeNavTypeHandler(event) {
        if (event.currentTarget.classList.contains('month-btn')) {
            this.props.changeNavType('month', this.props.dateObj);
        } else if (event.currentTarget.classList.contains('week-btn')) {
            this.props.changeNavType('week', this.props.dateObj);
        }
    }
    showEventsHandler() {
        if (this.props.showAllEvents) {
            this.props.hidePastEvents(this.props.calendarAreaState, this.props.showAllEvents);
        } else {
            this.props.showPastEvents(this.props.calendarAreaState, this.props.showAllEvents);
        }
    }

    render() {
        return (
          <nav className="clndr-nav relative clear-fix">
            <div className="nav-box-ctn nav-date abs-center vertical">
              <p className="selected-date">{this.props.dateString}</p>
            </div>

            <div className="nav-box-ctn navigation">
              <ul className="btn-ctn">
                <li id="todayBtn" className="nav-btn today-btn vertical text-center" onClick={this.todayBtnHandler}>
                  <a className="btn-icon" href={undefined}><i className="fa fa-check" aria-hidden="true" /></a>
                </li>
                <li id="prevBtn" className="nav-btn prev-btn vertical text-center" onClick={this.prevBtnHandler}>
                  <a className="btn-icon" href={undefined}><i className="fa fa-chevron-left" aria-hidden="true" /></a>
                </li>
                <li id="nextBtn" className="nav-btn next-btn vertical text-center" onClick={this.nextBtnHandler}>
                  <a className="btn-icon" href={undefined}><i className="fa fa-chevron-right" aria-hidden="true" /></a>
                </li>
              </ul>
            </div>

            <div className="nav-box-ctn nav-type">
              <ul className="btn-ctn">
                <li
                  className={`nav-btn hide-evt-btn vertical text-center ${this.props.showAllEvents ? 'active-nav-type' : ''}`}
                  onClick={this.showEventsHandler}
                ><a className="btn-icon" href={undefined}><img className="btn-img" alt="logo" src="/images/lamp-icon.png" /></a></li>
                <li
                  className={`nav-btn month-btn vertical text-center ${this.props.navType === 'month' ? 'active-nav-type' : ''}`}
                  onClick={this.changeNavTypeHandler}
                ><a className="btn-icon" href={undefined}><img className="btn-img" alt="logo" src="/images/calendar-icon-31.png" /></a></li>
                <li
                  className={`nav-btn week-btn vertical text-center ${this.props.navType === 'week' ? 'active-nav-type' : ''}`}
                  onClick={this.changeNavTypeHandler}
                ><a className="btn-icon" href={undefined}><img className="btn-img" alt="logo" src="/images/calendar-icon-7.png" /></a></li>
              </ul>
            </div>
          </nav>
        );
    }
}
