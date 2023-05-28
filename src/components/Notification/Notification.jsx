import React, { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message, total } = this.props;

    const classMaker = () => {
      if (total === 0) {
        return css.show;
      }
      return css.hidden;
    };
    return <h3 className={classMaker()}>{message}</h3>;
  }
}
