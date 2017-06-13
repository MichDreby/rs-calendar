
import React, { Component } from 'react';

export default class Curtain extends Component {
    constructor() {
        super();
        this.transitionEndHandler = this.transitionEndHandler.bind(this);
        this.animationEndHandler = this.animationEndHandler.bind(this);
    }
    animationEndHandler() {
        this.clndrCurtain.classList.add('hidden');
    }
    transitionEndHandler() {
        this.clndrCurtain.classList.add('none');
    }
    render() {
        const curtainData = this.props.curtainData;
        const animationTrigger = curtainData.animationTrigger;
        return (
          <div
            className="clndr-curtain"
            onTransitionEnd={this.transitionEndHandler}
            ref={(item) => { this.clndrCurtain = item; }}
          >
            <div className="curtain-slogan-ctn ">
              <h1
                className={`curtain-slogan ${(animationTrigger ? 'animated fadeOutDown' : '')}`}
                onAnimationEnd={this.animationEndHandler}
              >
                rs-calendar
              </h1>
            </div>
          </div>
        );
    }
}
