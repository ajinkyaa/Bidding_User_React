import ReactDOM from 'react-dom';
import React from 'react';
import UserListContainer from './components/UserListContainer'

ReactDOM.render(
  <div>
    <h1 className="pageTitle">Bids</h1>
    <UserListContainer />
  </div>,
  document.getElementById('container')
);
