import React from 'react'
import {Order} from './index'

const AllOrders = props => {
  console.log('AllOrders Component', props.orders)
  return (
    <div>
      {props.orders.map(order => <Order order={order} key={order.id} />)}
    </div>
  )
}

export default AllOrders
