import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ style, page, publications }) => {
  return (
    <p className={style.counter}>
      {page + 1}/{publications.length}
    </p>
  );
};

Counter.propTypes = {
  style: PropTypes.shape().isRequired,
  page: PropTypes.number.isRequired,
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // length: PropTypes.number.isRequired,
};

export default Counter;
