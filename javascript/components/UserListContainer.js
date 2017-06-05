import React from "react"
import ReactDOM from "react-dom"
import UserListRow from './UserListRow'
import store from '../store'
import { fetchUsers } from '../api/stompconfig'

export default class UserListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      userList: []
    }
  }

  componentWillMount() {
    fetchUsers()
    store.subscribe(() => {
      let state = store.getState()
      this.setState({
        userList: state.userList
      })
    })
  }
  
  // For sorting
  // sortData(state) {
  //   state.items.sort(function(a,b){
  //     return b.data.datanew.bestBid - a.data.datanew.bestBid;
  //   })
  // }

  getList() {
    let user = []
    this.state.userList.forEach((users, index) => {
      console.log(users.arrSparkline)
      user.push( <UserListRow key={index} index={index} message={users} /> )
    });
    return user
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
            <th>Mid Price</th>
          </tr>
        </thead>
        <tbody>
          {this.getList()}
        </tbody>
      </table>
    );
  }
}


// 