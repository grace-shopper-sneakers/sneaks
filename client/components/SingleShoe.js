import React from 'react'
import Shoe from './Shoe'
import {connect} from 'react-redux'

const SingleShoe = props => {
  return <Shoe shoe={props.shoe} />
}

const mapStateToProps = state => ({
  shoe: state.shoe
})

export default connect(mapStateToProps, null)(SingleShoe)
