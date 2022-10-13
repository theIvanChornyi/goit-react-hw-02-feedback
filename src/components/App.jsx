import { Component } from 'react';

import { Box } from './Box';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  addMark = button => {
    this.setState(state => ({ [button]: state[button] + 1 }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, mark) => (acc += mark), 0);
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    const PercentageInt = Number.parseInt(percentage);
    return this.state.good ? PercentageInt + '%' : '0%';
  };

  render() {
    const btnsName = Object.keys(this.state);

    return (
      <Box as="main" color="accent" pt={7} pb={7} textAlign="center">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={btnsName} onLeaveFeedback={this.addMark} />
        </Section>
        <>{showStat(this)}</>
      </Box>
    );
  }
}

function showStat(widget) {
  const { good, neutral, bad } = widget.state;
  return (
    <>
      {widget.countTotalFeedback() > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={widget.countTotalFeedback()}
            positivePercentage={widget.countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
}
