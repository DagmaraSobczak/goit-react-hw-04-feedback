import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  handleIncrement = option => {
    this.props.onLeaveFeedback(option);
  };

  render() {
    return (
      <>
        <button
          className={css.button}
          onClick={() => this.handleIncrement('good')}
        >
          good
        </button>
        <button
          className={css.button}
          onClick={() => this.handleIncrement('neutral')}
        >
          neutral
        </button>
        <button
          className={css.button}
          onClick={() => this.handleIncrement('bad')}
        >
          bad
        </button>
      </>
    );
  }
}
