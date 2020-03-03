import React from 'react'
import {Shoe} from './index'
import {Link} from 'react-router-dom'

const AllShoes = props => {
  return (
    <div>
      {props.shoes.map(shoe => (
        <Link to={'/shoes/' + shoe.id} key={shoe.id}>
          <Shoe shoe={shoe} />
        </Link>
      ))}
    </div>
  )
}

export default AllShoes
