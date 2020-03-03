import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'

const SingleOrder = props => {
  console.log('SingleOrder component', props)
  return <Order order={props.order} />
}

const mapStateToProps = state => ({
  order: state.order
})

export default connect(mapStateToProps, null)(SingleOrder)
