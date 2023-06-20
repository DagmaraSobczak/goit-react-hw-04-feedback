import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default class Statistic extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <>
        <h2>Statistics</h2>
        <p className={css.p}>Good: {good}</p>
        <p className={css.p}>Neutral: {neutral}</p>
        <p className={css.p}>Bad: {bad}</p>
        <p className={css.p}> Total: {total}</p>
        <p className={css.p}>
          {' '}
          Positive feedback: {this.props.positivePercentage} %
        </p>
      </>
    );
  }
}
