import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ style, publications, page }) => {
  return (
    <article key={publications[page].id} className={style.publication}>
      <h2>
        {page + 1}.{publications[page].title}
      </h2>
      <p>{publications[page].text}</p>
    </article>
  );
};

Publication.propTypes = {
  style: PropTypes.shape().isRequired,
  page: PropTypes.number.isRequired,
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Publication;
