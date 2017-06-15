
import React, { Component } from 'react';

export default class CalendarCell extends Component {
    constructor() {
        super();
        this.cellClickHandler = this.cellClickHandler.bind(this);
    }
    cellClickHandler() {
        const cellData = this.props.cellData;
        const cellEventObj = this.props.cellEventObj;
        if (cellEventObj.length === 0) {
            cellEventObj[0] = { type: 'emptyDay' };
        }
        const fullCellInfo = cellEventObj.map((item) => {
            for (const prop in cellData) {
                if ({}.hasOwnProperty.call(cellData, prop)) {
                    item[prop] = cellData[prop];
                }
            }
            return item;
        });
        this.props.showEventDetails(fullCellInfo);
    }
    convertDateFromStr(dateStr) {
        const millisec = Date.parse(dateStr);
        const date = new Date(millisec);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        return (date.toLocaleString('ru', options));
    }
    render() {
        const cellData = this.props.cellData;
        const navType = this.props.navType;
        const cellEventObj = this.props.cellEventObj;
        const marginRight = this.props.marginRight;
        const cellEvents = cellEventObj.map((item, index, arr) =>
            (
              <div
                key={item.id} onClick={this.trashEventHandler}
                className={`cell-evt hght-${arr.length} ${item.type}-evt`}
              >
                <h4 className="cell-evt-hdr">{item.type}</h4>
                <p className="cell-evt-time">{this.convertDateFromStr(item.start)}</p>
              </div>
            ),
        );
        const cellMobileEvents = cellEventObj.map(item =>
            (
              <div key={item.id} className={`cell-mobile-evt ${item.type}-evt`} />
            ),
        );
        return (
          <div
            style={{ marginRight }}
            className={`clndr-cell fl-left relative ${
                navType === 'month' ? 'month-nav-type ' : 'week-nav-type '
                }${cellData.currentDay ? 'current-day ' : ''
                }${cellData.anotherMonth ? 'another-month ' : ''}`}
            onClick={this.cellClickHandler}
          >
            <p className="cell-date-numb absolute">{cellData.date.getDate()}</p>
            <div className="desktop-evt-ctn">
              {cellEvents}
            </div>
            <div className="mobile-evt-ctn">
              {cellMobileEvents}
            </div>
          </div>
        );
    }
}
