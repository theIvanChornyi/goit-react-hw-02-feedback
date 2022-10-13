import { Component } from 'react';
import { Buttons } from './Buttons';
import { StatsFields } from './StatsFields';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class Widget extends Component {
  state = {
    ...INITIAL_STATE,
  };

  addMark = button => {
    this.setState(state => {
      return { [button]: state[button] + 1 };
    });
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
    const statsNames = Object.keys(this.state);
    return (
      <section>
        <h1>Please leave feedback</h1>
        <ul>
          <Buttons onClick={this.addMark} buttonsName={statsNames}></Buttons>
        </ul>
        <div>
          <h3>Statistics</h3>
          <ul>
            <StatsFields
              fieldsName={statsNames}
              statsAmount={this.state}
            ></StatsFields>
            <li>
              <div>{this.countTotalFeedback()}</div>
            </li>
            <li>
              <div>{this.countPositiveFeedbackPercentage()}</div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
