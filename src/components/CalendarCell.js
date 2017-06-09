

import React, { Component } from 'react';

export default class CalendarCell extends Component {
    cellClickHandler(event) {
        const cellData = this.props.cellData;
        const cellEventObj = this.props.cellEventObj;
        if (cellEventObj.length === 0) {
            cellEventObj[0] = {type: 'emptyDay'};
        }
        let fullCellInfo = cellEventObj.map((item) => {
            for (let prop in cellData)  {
                item[prop] = cellData[prop];
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
        }
        return (date.toLocaleString('ru', options));
    }
    render() {
        const cellData = this.props.cellData;
        const navType = this.props.navType;
        const cellEventObj = this.props.cellEventObj;
        const cellEvents = cellEventObj.map((item, index, arr) => {
            return (
                <div key={index} className={'cell-evt hght-' + arr.length + ' ' +
                    item.type + '-evt'}>
                    <h4 className='cell-evt-hdr'>{item.type}</h4>
                    <p className='cell-evt-time'>{this.convertDateFromStr(item.start)}</p>
                </div>
            );
        });
        const cellMobileEvents = cellEventObj.map((item, index, arr) => {
            return (
                <div key={index} className={'cell-mobile-evt ' + item.type + '-evt'}></div>
            );
        });
        return (
            <div className={'clndr-cell fl-left relative ' +
                (navType === 'month' ? 'month-nav-type ' : 'week-nav-type ') +
                (cellData.currentDay ? 'current-day ' : '') +
                (cellData.anotherMonth ? 'another-month ' : '')}
                onClick={this.cellClickHandler.bind(this)}>
                <p className='cell-date-numb absolute'>{cellData.date.getDate()}</p>
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
















//sdf
