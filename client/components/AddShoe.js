import React from 'react'
import {AllShoes} from './index'
import {connect} from 'react-redux'
import {addShoe} from '../store'

const initialState = {
  brand: '',
  model: '',
  size: '8',
  color: 'black',
  price: 99.99
}

class AddShoe extends React.Component {
  constructor() {
    super()
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    if (this.validate()) {
      this.props.addShoe(this.state)
    } else {
      console.log('did not validate')
    }
  }
  validate() {
    return this.state.brand && this.state.model && this.state.size
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="add-shoe">
          <fieldset>
            <legend>Add A Shoe</legend>
            <label htmlFor="brand">brand</label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={this.state.brand}
              onChange={this.handleChange}
            />
            <label htmlFor="model">Model</label>
            <input
              id="model"
              name="model"
              onChange={this.handleChange}
              value={this.state.model}
            />
            <label htmlFor="size">Size</label>
            <select
              value={this.state.size}
              name="size"
              id="size"
              onChange={this.handleChange}
            >
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button type="submit">Add</button>
          </fieldset>
        </form>
        <AllShoes shoes={this.props.shoes} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  shoes: state.shoes
})
const mapDispatchToProps = dispatch => ({
  addShoe: shoe => dispatch(addShoe(shoe))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddShoe)
