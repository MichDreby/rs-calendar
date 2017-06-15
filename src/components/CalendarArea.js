
import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarArea extends Component {
    getDateObj(date, month) {
        const cellDate = new Date(+date);
        const activeMonth = month;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();
        return {
            date: cellDate,
            anotherMonth: date.getMonth() !== activeMonth && activeMonth !== undefined,
            currentDay: (date.getFullYear() === currentYear &&
                         date.getMonth() === currentMonth &&
                         date.getDate() === currentDay),

        };
    }
    getRowMargin(rowNumber) {
        if (!isMobileDevice()) {
            const windowHeight = this.props.windowSize.clientHeight;
            const rowMarginBottom = (((windowHeight * 0.95) * 0.95) * 0.05) / (rowNumber - 1);
            return rowMarginBottom;
        }
    }
    createMonthCalendar(dateObj) {
        let date = new Date(dateObj.getFullYear(), dateObj.getMonth());
        const month = date.getMonth();
        const calendar = [[], [], [], [], [], []];
        for (let i = 0; i < calendar.length; i++) {
            if (i === 0) {
                for (let j = date.getDay() - 1; j >= 0; j--) {
                    date.setDate(date.getDate() - 1);
                    calendar[i][j] = this.getDateObj(date, month);
                    if (j === 0) {
                        date = new Date(date.getFullYear(), date.getMonth() + 1);
                    }
                }
            }
            if (i === calendar.length - 1 && month !== date.getMonth() && date.getDay() === 0) {
                calendar.pop();
                break;
            }
            for (let j = date.getDay(); j < 7; j++) {
                calendar[i][j] = this.getDateObj(date, month);
                date.setDate(date.getDate() + 1);
            }
        }
        return calendar;
    }
    createWeekCalendar(dateObj) {
        let date = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        const calendar = [[]];
        for (let j = date.getDay() - 1; j >= 0; j--) {
            date.setDate(date.getDate() - 1);
            calendar[0][j] = this.getDateObj(date);
            if (j === 0) {
                date = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            }
        }
        for (let j = date.getDay(); j < 7; j++) {
            calendar[0][j] = this.getDateObj(date);
            date.setDate(date.getDate() + 1);
        }
        return calendar;
    }
    render() {
        let calendarArray;
        if (this.props.navType === 'month') {
            calendarArray = this.createMonthCalendar(this.props.dateObj);
        } else if (this.props.navType === 'week') {
            calendarArray = this.createWeekCalendar(this.props.dateObj);
        }
        const rowsNumb = calendarArray.length;
        const calendarRowCollect = calendarArray.map((item, index, arr) => {
            const rowNumber = arr.length;
            const marginBottom = (index === rowNumber - 1 ? '' : `${this.getRowMargin(rowNumber)}px`);
            return (
              <CalendarRow
                windowSize={this.props.windowSize}
                key={item.id} marginBottom={marginBottom} cellArray={item} rowsNumb={rowsNumb}
                eventObj={this.props.eventObj} navType={this.props.navType}
                showEventDetails={this.props.showEventDetails} dateObj={this.props.dateObj}
                getPrevMonth={this.props.getPrevMonth} getNextMonth={this.props.getNextMonth}
                getPrevWeek={this.props.getPrevWeek} getNextWeek={this.props.getNextWeek}
              />
            );
        });
        return (
          <div className="clndr-area">
            <CalendarHeader />
            <div
              className="clndr-row-ctn"
              ref={(clndrRowCtn) => { this.clndrRowCtn = clndrRowCtn; }}
            >
              {calendarRowCollect}
            </div>
          </div>
        );
    }
}
