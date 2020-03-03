import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Statistics from "./Statistics.js";
import FeedbackOptions from "./Buttons.js";
import Section from "./Section.js";
import Notification from "./Notification.js";

export default class Feedback extends Component {
  static defaultProps = {
    step: 1
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: "0",
    isOpen: false
  };

  statisticDataId = shortid.generate();

  onLeaveFeedback = e => {
    const name = e.target.name;

    this.setState((prevState, props) => ({
      [name]: prevState[name] + props.step,
      total: prevState.total + props.step,
      isOpen: true
    }));

    this.setState((prevState, props) => ({
      percentage: Math.round((prevState.good / prevState.total) * 100) + "%"
    }));
  };

  render() {
    return (
      <Fragment>
        <Section title="Please Leave your feedback" />
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          percentage={this.state.percentage}
          isOpen={this.state.isOpen}
          shortId={this.statisticDataId}
        />
        <Notification message="No feedback given" isOpen={this.state.isOpen} />
      </Fragment>
    );
  }
}

Feedback.propTypes = {
  step: PropTypes.number.isRequired
};
