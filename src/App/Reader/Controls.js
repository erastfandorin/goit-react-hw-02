import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ style, hendlBack, hendlNext, page }) => {
  return (
    <section className={style.controls}>
      <button
        type="button"
        className={page > 0 ? style.button : style.button_disabled}
        onClick={hendlBack}
      >
        Назад
      </button>
      <button
        type="button"
        className={page < 11 ? style.button : style.button_disabled}
        onClick={hendlNext}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  style: PropTypes.shape().isRequired,
  hendlBack: PropTypes.func.isRequired,
  hendlNext: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Controls;
