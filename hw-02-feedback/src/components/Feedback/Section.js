import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Section = props => <p className={styles.title}>{props.title}</p>;
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired
};
