import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => (
  <section className={styles.statistics}>
    {typeof title !== 'undefined' && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistic;

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return bgColor;
}
