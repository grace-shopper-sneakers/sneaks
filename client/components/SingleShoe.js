import React from 'react'
import Shoe from './Shoe'
import {connect} from 'react-redux'
import {getShoe, deleteShoe, addShoeToCart} from '../store'

class SingleShoe extends React.Component {
  componentDidMount() {
    this.props.getShoe(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.props.addShoe(this.props.shoe.id)}
        >
          ADD TO CART
        </button>

        <Shoe shoe={this.props.shoe} />
        {this.props.user.isAdmin && this.props.shoe ? (
          <button
            type="button"
            onClick={() => this.props.delete(this.props.shoe.id)}
          >
            delete{' '}
          </button>
        ) : (
          ''
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  shoe: state.shoe,
  user: state.user
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  getShoe: id => dispatch(getShoe(id)),
  delete: id => {
    dispatch(deleteShoe(id))
    ownProps.history.push('/shoes')
  },
  addShoe: shoeId => dispatch(addShoeToCart(shoeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleShoe)
