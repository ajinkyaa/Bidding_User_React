import React from "react"
import ReactDOM from "react-dom"

export default class UserListRow extends React.Component{
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps() {
    Sparkline.draw(this.refs.sparklineWrap, this.props.message.arrSparkline)
  }
  render() {
    return (
     <tr>
      <td>{this.props.message.data.name}</td>
      <td>{this.props.message.data.bestAsk}</td>
      <td>{this.props.message.data.openBid}</td>
      <td>{this.props.message.data.openAsk}</td>
      <td>{this.props.message.data.lastChangeAsk}</td>
      <td>{this.props.message.data.lastChangeBid}</td>
      <td><span ref="sparklineWrap"></span></td>
     </tr>
    )
  }
}
