import React from "react";
import ReactDOM from "react-dom";
import UserListRow from './UserListRow'
import store from '../store'
import { fetchUsers } from '../api/stompconfig'

export default class UserListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []   
    }
  }

  componentWillMount() {
    fetchUsers(store)
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.items
      })
    })
  }

  getList() {
    var items = []
    this.state.items.forEach((item, index) => {
      items.push( <UserListRow key={index} index={index} message={item} /> )
    });
    return items
  }

  render() {
    return (
      
      <table className="table">
      	<thead>
          <tr>
            <th>Name</th>
      			<th>Current best bid price</th>
      			<th>Current best ask price</th>
      			<th>Open Bid</th>
      			<th>Open Ask</th>
      			<th>Best ask last changed</th>
      			<th>Midprice</th>
        	</tr>
        </thead>
      	<tbody>
          {this.getList()}
        </tbody>
      </table>
    );
  }
}