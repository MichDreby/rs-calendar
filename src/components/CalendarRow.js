import React, { Component } from 'react';
import CalendarCell from './CalendarCell';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarRow extends Component {
    constructor() {
        super();
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
    }
    getCellMargin() {
        if (!isMobileDevice()) {
            const windowWidth = this.props.windowSize.clientWidth;
            const cellMarginRight = ((windowWidth * 0.75) * 0.03) / 6;
            return cellMarginRight;
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
            if (deltaX > 40) {
                getPrevMonth(dateObj);
            } else if (deltaX < -40) {
                getNextMonth(dateObj);
            }
        } else if (navType === 'week') {
            if (deltaX > 40) {
                getPrevWeek(dateObj);
            } else if (deltaX < -40) {
                getNextWeek(dateObj);
            }
        }
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
        const marginBottom = this.props.marginBottom;
        const cellArray = this.props.cellArray;
        let cellEventObj;
        const calendarCellCollect = cellArray.map((item, index, arr) => {
            const marginRight = (index === arr.length - 1 ? '' : `${this.getCellMargin()}px`);
            cellEventObj = this.props.eventObj.filter((evt) => {
                const millisec = Date.parse(evt.start);
                const eventDate = new Date(millisec);
                return this.sameDate(item, eventDate);
            });
            cellEventObj.sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
            return (
              <CalendarCell
                marginRight={marginRight}
                cellEventObj={cellEventObj} navType={this.props.navType}
                key={item.id} cellData={item} showEventDetails={this.props.showEventDetails}
              />
            );
        });

        return (
          <div
            className={`clear-fix clndr-row-${this.props.rowsNumb}`}
            style={{ marginBottom }}
            ref={(clndrRow) => { this.clndrRow = clndrRow; }}
            onTouchStart={this.touchStartHandler}
            onTouchEnd={this.touchEndHandler}
          >
            {calendarCellCollect}
          </div>
        );
    }
}
