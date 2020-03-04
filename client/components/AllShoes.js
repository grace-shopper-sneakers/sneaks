import React from 'react'
import {Shoe} from './index'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteShoe} from '../store'
const AllShoes = props => {
  const {user} = props
  return (
    <div className="all-shoes">
      {props.shoes.length === 0 ? (
        <h1>No shoes here!</h1>
      ) : (
        props.shoes.map(shoe => (
          <div key={shoe.id} className="shoe">
            <Link to={'/shoes/' + shoe.id}>
              <Shoe shoe={shoe} />
            </Link>
            {user.isAdmin ? (
              <button type="button" onClick={() => props.delete(shoe.id)}>
                delete{' '}
              </button>
            ) : (
              ''
            )}
          </div>
        ))
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  delete: id => {
    dispatch(deleteShoe(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
