import React from "react"
import ReactDOM from "react-dom"

export default class UserListRow extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Sparkline.draw(this.refs.sparklineWrap, this.props.message.arrSparkline)
  }
  render() {
    return (
     <tr>
      <td>{this.props.message.data.name}</td>
      <td>{this.props.message.data.datanew.bestAsk}</td>
      <td>{this.props.message.data.datanew.openBid}</td>
      <td>{this.props.message.data.datanew.openAsk}</td>
      <td>{this.props.message.data.datanew.lastChangeAsk}</td>
      <td>{this.props.message.data.datanew.lastChangeBid}</td>
      <td><span ref="sparklineWrap"></span></td>
     </tr>
    )
  }
}
