import {addShoeToCart, getUserCart, removeFromCart} from '../store'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Shoe from './Shoe'
import React, {Component} from 'react'

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '1'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    const numberValue = parseInt(this.state.value, 10)
    const {cart, shoes} = this.props
    return (
      <div>
        {cart.length === 0 ? (
          <div>
            Empty cart :( Go checkout some shoes? <br />
            <Link to="/shoes">
              <button className="btn red accent-2" type="button">
                See Shoes
              </button>
            </Link>
          </div>
        ) : (
          cart.map(shoeId => (
            <div key={shoeId}>
              <Shoe shoe={shoes.find(shoe => shoe.id === shoeId)} />
              <button
                className="btn red accent-2"
                type="button"
                onClick={() => this.props.removeFromCart(shoeId)}
              >
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  shoes: state.shoes
})

const mapDispatchToProps = dispatch => ({
  addToCart: shoeId => {
    dispatch(addShoeToCart(shoeId))
  },
  getCart: () => {
    dispatch(getUserCart())
  },
  removeFromCart: id => {
    dispatch(removeFromCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
