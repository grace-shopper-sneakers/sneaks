import React from 'react'
import {Shoe} from './index'

const AllShoes = props => {
  return (
    <div>{props.shoes.map(shoe => <Shoe shoe={shoe} key={shoe.id} />)}</div>
  )
}

export default AllShoes
