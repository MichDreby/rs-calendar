import React, { Component } from 'react';
import isMobileDevice from '../helperFunctions/isMobileDevice';

export default class CalendarHeader extends Component {
    getCellMargin() {
        if (!isMobileDevice()) {
            const windowWidth = this.props.windowSize.clientWidth;
            const cellMarginRight = ((windowWidth * 0.75) * 0.03) / 6;
            return cellMarginRight;
        }
    }
    render() {
        const marginRight = `${this.getCellMargin()}px`;
        return (
          <div className="clndr-header">
            <div className="clndr-row clear-fix">
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Sun</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Mon</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Tue</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Wed</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Thu</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left" style={{ marginRight }}>
                <p className="hdr-cell-day">Fri</p>
              </div>
              <div className="clndr-cell text-center vertical hdr-cell fl-left">
                <p className="hdr-cell-day">Sat</p>
              </div>
            </div>
          </div>
        );
    }
}
