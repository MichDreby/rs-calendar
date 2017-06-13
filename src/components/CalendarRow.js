import React, { Component } from 'react';
import CalendarCell from './CalendarCell';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarRow extends Component {
    constructor() {
        super();
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
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
    touchStartHandler(event) {
        const touchInitX = event.changedTouches[0].clientX;
        this.touchInitX = touchInitX;
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
                getPrevMonth(dateObj);
            } else if (deltaX < -20) {
                getNextMonth(dateObj);
            }
        } else if (navType === 'week') {
            if (deltaX > 20) {
                getPrevWeek(dateObj);
            } else if (deltaX < -20) {
                getNextWeek(dateObj);
            }
        }
    }
    addCellsMargin() {
        const clndrRow = this.clndrRow;
        const clndrCellCollection = clndrRow.children;
        const clndrRowWidth = parseInt(getComputedStyle(clndrRow).width);
        [].forEach.call(clndrCellCollection, (cell, i, arr) => {
            const cellsNumb = arr.length;
            if (i !== (cellsNumb - 1)) {
                cell.style.marginRight = `${(clndrRowWidth * 0.03) / (cellsNumb - 1)}px`;
            } else {
                cell.style.marginBottom = '';
            }
        });
    }
    sameDate(cellData, eventDate) {
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
        const calendarCellCollect = cellArray.map((item) => {
            cellEventObj = this.props.eventObj.filter((evt) => {
                const millisec = Date.parse(evt.start);
                const eventDate = new Date(millisec);
                return this.sameDate(item, eventDate);
            });
            cellEventObj.sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
            return (
              <CalendarCell
                cellEventObj={cellEventObj} navType={this.props.navType}
                key={item.id} cellData={item} showEventDetails={this.props.showEventDetails}
              />
            );
        });

        return (
          <div
            className={`clear-fix clndr-row-${this.props.rowsNumb}`}
            ref={(clndrRow) => { this.clndrRow = clndrRow; }}
            onTouchStart={this.touchStartHandler}
            onTouchEnd={this.touchEndHandler}
          >
            {calendarCellCollect}
          </div>
        );
    }
}
