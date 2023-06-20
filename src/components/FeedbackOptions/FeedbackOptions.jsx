import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleIncrement = option => {
    onLeaveFeedback(option);
  };

  return (
    <>
      <button className={css.button} onClick={() => handleIncrement('good')}>
        good
      </button>
      <button className={css.button} onClick={() => handleIncrement('neutral')}>
        neutral
      </button>
      <button className={css.button} onClick={() => handleIncrement('bad')}>
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
