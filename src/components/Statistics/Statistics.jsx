import React from 'react';
import { Statistic, Span } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Statistic>
      <Span>Good:{good}</Span>
      <Span>Neutral:{neutral}</Span>
      <Span>Bad:{bad}</Span>
      <Span>Total:{total}</Span>
      <Span>Positive feedback:{positivePercentage}%</Span>
    </Statistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
