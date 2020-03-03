import React from 'react'
import Shoe from './Shoe'
import {connect} from 'react-redux'
import {getShoe} from '../store'

class SingleShoe extends React.Component {
  componentDidMount() {
    this.props.getShoe(this.props.match.params.id)
  }
  render() {
    return <Shoe shoe={this.props.shoe} />
  }
}
const mapStateToProps = state => ({
  shoe: state.shoe
})
const mapDispatchToProps = dispatch => ({
  getShoe: id => dispatch(getShoe(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleShoe)
