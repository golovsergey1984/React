import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

function onlineStatusBGcolol(item) {
  const iconClasses = [styles.status];

  if (item === false) {
    iconClasses.push(styles.statusFalse);
  }
  return iconClasses.join(' ');
}

const FriendList = ({ friends, alt }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <li key={item.id} className={styles.item}>
          <span className={onlineStatusBGcolol(item.isOnline)}></span>
          <img
            className={styles.avatar}
            src={item.avatar}
            alt={alt}
            width="48"
          />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  alt: 'User profile photo',
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
