import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import style from './Reader.module.css';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  hendlBack = () => {
    if (this.state.page > 0) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }));
    }
  };

  hendlNext = () => {
    if (this.state.page < this.props.publications.length - 1) {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    }
  };

  render() {
    const { page } = this.state;
    const { publications } = this.props;
    return (
      <div className={style.reader}>
        <Controls
          style={style}
          hendlBack={this.hendlBack}
          hendlNext={this.hendlNext}
          page={page}
        />
        <Counter style={style} publications={publications} page={page} />
        <Publication style={style} publications={publications} page={page} />
      </div>
    );
  }
}

Reader.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
