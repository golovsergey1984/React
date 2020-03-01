import React, { Fragment } from "react";
import styles from "./Friends.module.css";
import PropTypes from "prop-types";

function onlineStatusBGcolol(item) {
  const iconClasses = [styles.status];

  if (item === false) {
    iconClasses.push(styles.statusFalse);
  }
  return iconClasses.join(" ");
}

const FriendListItem = ({ isOnline, name, avatar, alt }) => (
  <Fragment>
    <span className={onlineStatusBGcolol(isOnline)}></span>
    <img className={styles.avatar} src={avatar} alt={alt} width="48" />
    <p className={styles.name}>{name}</p>
  </Fragment>
);

FriendListItem.defaultProps = {
  alt: "User profile photo"
};

FriendListItem.propTypes = {
  alt: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  )
};
export default FriendListItem;
