import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p className={css.p}>Good: {good}</p>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Total: {total}</p>
      <p className={css.p}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
