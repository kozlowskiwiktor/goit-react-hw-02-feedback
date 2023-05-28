import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <button type="button" onClick={good}>
          Good
        </button>
        <button type="button" onClick={neutral}>
          Neutral
        </button>
        <button type="button" onClick={bad}>
          Bad
        </button>
      </div>
    );
  }
}
