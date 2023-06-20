import React, { Component } from 'react';

import css from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <p className={css.title}>{title}</p>
        {children}
      </>
    );
  }
}
