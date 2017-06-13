import React, { Component } from 'react';
import autosize from '../../node_modules/autosize/dist/autosize';

export default class FeedbackForm extends Component {
    constructor() {
        super();
        this.placeholder = 'Please, leave your feedback';
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.formFocusHandler = this.formFocusHandler.bind(this);
        // this.formBlurHandler = this.formBlurHandler.bind(this);
        this.onChangeFormHandler = this.onChangeFormHandler.bind(this);
    }
    onChangeFormHandler(event) {
        this.props.changeFeedbackForm(event.currentTarget.value);
    }
    formFocusHandler(event) {
        // event.target.style.textAlign = 'left';
        // event.target.placeholder = '';
        autosize(event.currentTarget);
    }
    // formBlurHandler(event) {
        // if (event.target.value === '') {
            // event.target.placeholder = this.placeholder;
            // event.target.style.textAlign = 'center';
        // }
    // }
    formSubmitHandler(event) {
        event.preventDefault();
        this.props.submitFeedbackForm();
    }
    render() {
        const inputText = this.props.feedbackFormData.inputText;
        return (
          <div className="event-feedback">
            <form className="feedback-form" onSubmit={this.formSubmitHandler}>
              <textarea
                className="feedback-content"
                rows="1" cols="20" placeholder={this.placeholder}
                name="feedback" value={inputText}
                onFocus={this.formFocusHandler}
                onChange={this.onChangeFormHandler}
                onBlur={this.formBlurHandler}
              />
              <input className="feedback-btn" type="submit" value="send" />
            </form>
          </div>
        );
    }
}
