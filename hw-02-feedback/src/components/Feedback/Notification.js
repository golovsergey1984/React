import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Notification = props =>
  !props.isOpen && (
    <div>
      <p className={styles.title + " " + styles.msg}>{props.message}</p>
    </div>
  );

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};
