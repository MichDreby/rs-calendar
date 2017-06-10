import React, { Component } from 'react';
import autosize from '../../node_modules/autosize/dist/autosize';

export default class FeedbackForm extends Component {
    constructor() {
        super();
        this.placeholder = 'Please, leave your feedback';
    }
    formFocusHandler(event) {
        event.target.style.textAlign = 'left';
        event.target.placeholder = '';
        autosize(event.target);
    }
    formBlurHandler(event) {
        if (event.target.value === '') {
            event.target.placeholder = this.placeholder;
            event.target.style.textAlign = 'center';
        }
    }
    formSubmitHandler(event) {
        event.preventDefault();
        // const textArea = event.target.querySelector('.feedback-content');
        this.textArea.value = '';
        this.textArea.placeholder = this.placeholder;
        this.textArea.style.textAlign = 'center';
    }
    render() {
        return (
          <div className="event-feedback">
            <form className="feedback-form" onSubmit={this.formSubmitHandler.bind(this)}>
              <textarea
                className="feedback-content"
                rows="1" cols="20" placeholder={this.placeholder}
                name="feedback" onFocus={this.formFocusHandler.bind(this)}
                onBlur={this.formBlurHandler.bind(this)}
                ref={(textArea) => { this.textArea = textArea; }}
              />
              <input className="feedback-btn" type="submit" value="send" />
            </form>
          </div>
        );
    }
}
