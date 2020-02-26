import React, { Fragment } from 'react';
import Profile from './Profile/UserList';
import user from './Profile/UserList.json';
import Statistics from './Statisitc/Statistic.js';
import statisticalData from './Statisitc/Statistic.json';
import FriendList from './Friends/Friends.js';
import friends from './Friends/Friends.json';
import transactions from './Transaction/Transiction.json';
import TransactionHistory from './Transaction/Transiction.js';

const App = () => (
  <Fragment>
    <h3>TASK #1: Social Profile</h3>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <h3>TASK #2: Statistics Data</h3>
    <Statistics title="Upload stats" stats={statisticalData} />
    <h3>TASK #3: Friends List</h3>
    <FriendList friends={friends} />
    <h3>TASK #4: Transaction history</h3>
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;
