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
        {cart.length === 0
          ? 'Empty cart :('
          : cart.map(shoeId => (
              <div key={shoeId}>
                <Shoe shoe={shoes.find(shoe => shoe.id === shoeId)} />
                <button
                  type="button"
                  onClick={() => this.props.removeFromCart(shoeId)}
                >
                  Remove from Cart
                </button>
                <p />
                <form onSubmit={this.handleSubmit}>
                  {/* <label>
                    Quantity:
                    {/* <select
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select> */}
                  {/* </label> */}
                  {/* <input type="submit" value="Submit" /> */}
                </form>
              </div>
            ))}
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
