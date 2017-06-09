
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarArea extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
        if (isMobileDevice() === false) {
            this.addRowsMargin();
        }

    }
    componentDidUpdate(){
        if (isMobileDevice() === false) {
            this.addRowsMargin();
        }
    }
    addRowsMargin() {
        const clndrRowCtn = this.clndrRowCtn;
        const clndrRowCtnHeight = parseInt(getComputedStyle(clndrRowCtn).height);
        const clndrRowCollection = clndrRowCtn.children;
        [].forEach.call(clndrRowCollection, (clndrRow, i , arr) => {
            const rowsNumb = arr.length;
            if (i !== (rowsNumb - 1)) {
                clndrRow.style.marginBottom = clndrRowCtnHeight * 0.05 / (rowsNumb - 1) + 'px';
            } else {
                clndrRow.style.marginBottom = '';
            }
        });
    }
    getDateObj(date, month){
        const cellDate = new Date(+ date);
        let activeMonth = month;
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let currentDay = new Date().getDate();
        return {
            date: cellDate,
            anotherMonth: date.getMonth() !== activeMonth && activeMonth !== undefined,
            currentDay: (date.getFullYear() === currentYear &&
                         date.getMonth() === currentMonth &&
                         date.getDate() === currentDay),

        }
    }
    createMonthCalendar(dateObj) {
        let date = new Date(dateObj.getFullYear(), dateObj.getMonth());
        let month = date.getMonth();
        let calendar = [ [], [], [], [], [], [] ];
        for (let i = 0; i < calendar.length; i++) {
            if (i === 0) {
                for (let j = date.getDay() - 1; j >= 0; j--) {
                    date.setDate(date.getDate() - 1);
                    calendar[i][j] = this.getDateObj(date, month);
                    if(j == 0) {
                        date = new Date(date.getFullYear(), date.getMonth()+1);
                    }
                }
            }
            if (i == calendar.length - 1 && month !== date.getMonth() && date.getDay() === 0){
                calendar.pop();
                break;
            }
            for (let j = date.getDay(); j < 7; j++){
                calendar[i][j] = this.getDateObj(date, month);
                date.setDate(date.getDate() + 1);
            }
        }
        return calendar;
    }
    createWeekCalendar(dateObj) {
        let date = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        let calendar = [[]];
        for (let j = date.getDay() - 1; j >= 0; j--) {
            date.setDate(date.getDate() - 1);
            calendar[0][j] = this.getDateObj(date);
            if(j == 0) {
                date = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            }
        }
        for (let j = date.getDay(); j < 7; j++){
            calendar[0][j] = this.getDateObj(date);
            date.setDate(date.getDate() + 1);
        }
        return calendar;
    }
    render() {
        let calendarRowCollect;
        let calendarArray;
        if (this.props.navType === 'month') {
            calendarArray = this.createMonthCalendar(this.props.dateObj);
        }
        else if (this.props.navType === 'week') {
            calendarArray = this.createWeekCalendar(this.props.dateObj);
        }
        const rowsNumb = calendarArray.length;
        calendarRowCollect = calendarArray.map((item, index) =>(
            <CalendarRow key={index} cellArray={item} rowsNumb={rowsNumb}
                         eventObj={this.props.eventObj} navType={this.props.navType}
                         showEventDetails={this.props.showEventDetails} dateObj={this.props.dateObj}
                         getPrevMonth={this.props.getPrevMonth} getNextMonth={this.props.getNextMonth}
                         getPrevWeek={this.props.getPrevWeek} getNextWeek={this.props.getNextWeek}/>
        ));
        return (
            <div className="clndr-area">
                <CalendarHeader />
                <div className="clndr-row-ctn"
                    ref={(clndrRowCtn) => {this.clndrRowCtn = clndrRowCtn}}>
                    {calendarRowCollect}
                </div>
            </div>
        )
    }
}