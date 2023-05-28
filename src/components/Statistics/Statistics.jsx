import React, { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    const classMaker = () => {
      if (total === 0) {
        return css.hidden;
      }
      return css.show;
    };
    return (
      <div className={classMaker()}>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}</p>
      </div>
    );
  }
}
