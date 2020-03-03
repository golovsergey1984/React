import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Buttons = ({ onLeaveFeedback }) => (
  <Fragment>
    <button
      type="button"
      name="good"
      className={styles.buttonGood + " " + styles.button}
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      className={styles.buttonNeutral + " " + styles.button}
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      className={styles.buttonBad + " " + styles.button}
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </Fragment>
);
export default Buttons;

Buttons.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};
