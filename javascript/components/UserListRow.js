import React from "react";
import ReactDOM from "react-dom";
export default class UserListRow extends React.Component{
  componentDidMount() {	
		Sparkline.draw(this.refs.abc, this.props.message.sparkline)
  }
  render() {
    return (
      <tr>
        <td>{this.props.message.name}</td>
        <td>{this.props.message.bestAsk}</td>
        <td>{this.props.message.openBid}</td>
        <td>{this.props.message.openAsk}</td>
        <td>{this.props.message.lastChangeAsk}</td>
        <td>{this.props.message.lastChangeBid}</td>
        <td><span ref="abc"></span></td>
      </tr>
    )
  }
}
