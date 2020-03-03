import React from 'react'
import {Order} from './index'

const AllOrders = props => {
  console.log('Orders Component', props)
  return (
    <div>
      <Order />
      {/* {props.shoes.map(shoe => <Shoe shoe={shoe} key={shoe.id} />)} */}
    </div>
  )
}

export default AllOrders
