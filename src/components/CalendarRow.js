

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalendarCell from './CalendarCell';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarRow extends Component {
    constructor() {
        super();
        this.touchInitX;
    }
    touchEndHandler(event) {
        const dateObj = this.props.dateObj;
        const navType = this.props.navType;
        const getPrevMonth = this.props.getPrevMonth;
        const getNextMonth = this.props.getNextMonth;
        const getPrevWeek = this.props.getPrevWeek;
        const getNextWeek = this.props.getNextWeek;
        const endX = event.changedTouches[0].clientX;
        const deltaX = endX - this.touchInitX;
        if (navType === 'month') {
            if (deltaX > 20) {
                console.log('prev month!!!');
                getPrevMonth(dateObj);
            }
            else if (deltaX < -20) {
                console.log('next month!!!');
                getNextMonth(dateObj);
            }
        }
        else if (navType === 'week') {
            if (deltaX > 20) {
                console.log('prev week!!!');
                getPrevWeek(dateObj);
            }
            else if (deltaX < -20) {
                console.log('next week!!!');
                getNextWeek(dateObj);
            }
        }
        // getPrevMonth={getPrevMonth} getNextMonth={getNextMonth}
        // getPrevWeek={getPrevWeek} getNextWeek={getNextWeek}
        // this.removeEventListener('onTouchEnd', touchEndHandler);
    }
    touchStartHandler(event) {
        const touchInitX = event.changedTouches[0].clientX;
        this.touchInitX = touchInitX;
    }








    componentDidMount() {
        if (isMobileDevice() === false) {
            this.addCellsMargin();
        }
    }
    componentDidUpdate() {
        if (isMobileDevice() === false) {
            this.addCellsMargin();
        }
    }
    addCellsMargin() {
        const clndrRow = this.clndrRow;
        const clndrCellCollection = clndrRow.children;
        const clndrRowWidth = parseInt(getComputedStyle(clndrRow).width);
        [].forEach.call(clndrCellCollection, (cell, i, arr) => {
            const cellsNumb = arr.length;
            if (i !== (cellsNumb - 1)) {
                cell.style.marginRight = clndrRowWidth * 0.03 / (cellsNumb - 1) + 'px';
            } else {
                cell.style.marginBottom = '';
            }
        });
    }
    sameDate(cellData, eventDate){
        const cellYear = cellData.date.getFullYear();
        const cellMonth = cellData.date.getMonth();
        const cellDay = cellData.date.getDate();
        const eventYear = eventDate.getFullYear();
        const eventMonth = eventDate.getMonth();
        const eventDay = eventDate.getDate();
        return (cellYear === eventYear && cellMonth === eventMonth && cellDay === eventDay);
    }
    render() {
        const cellArray = this.props.cellArray;
        let cellEventObj;
        const calendarCellCollect = cellArray.map((item, index) => {
            cellEventObj = this.props.eventObj.filter((evt) => {
                let millisec = Date.parse(evt.start);
                let eventDate = new Date(millisec);
                return this.sameDate(item, eventDate);
            });
            cellEventObj.sort((a, b) => {
                return Date.parse(a.start) - Date.parse(b.start);
            });
            return (
                <CalendarCell cellEventObj={cellEventObj} navType={this.props.navType}
                    key={index} cellData={item} showEventDetails={this.props.showEventDetails}/>
            );
        });

        return (
            <div className={'clear-fix clndr-row-' + this.props.rowsNumb}
                ref={clndrRow => {this.clndrRow = clndrRow}}
                onTouchStart={this.touchStartHandler.bind(this)}
                onTouchEnd={this.touchEndHandler.bind(this)}>
                {calendarCellCollect}
            </div>
        );
    }
}
