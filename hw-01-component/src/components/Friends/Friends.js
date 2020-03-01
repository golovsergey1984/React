import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <li key={item.id} className={styles.item}>
          <FriendListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired
};

export default FriendList;
