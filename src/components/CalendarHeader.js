

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class CalendarHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="clndr-header">
                <div className="clndr-row clear-fix">
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Sun</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Mon</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Tue</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Wed</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Thu</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Fri</p></div>
                    <div className="clndr-cell text-center vertical hdr-cell fl-left"><p className="hdr-cell-day">Sat</p></div>
                </div>
            </div>
        )
    }
}
