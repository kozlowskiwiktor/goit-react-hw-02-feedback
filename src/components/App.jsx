import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };
  handleAddNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };
  handleAddBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = (this.state.good * 100) / total;
    const number = Math.round(percentage) + '%';
    if (number === 'NaN%') return 0 + '%';
    return number;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.handleAddGood}
            neutral={this.handleAddNeutral}
            bad={this.handleAddBad}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <Notification
            message="There is no feedback"
            total={this.countTotalFeedback()}
          />
        </Section>
      </div>
    );
  }
}
