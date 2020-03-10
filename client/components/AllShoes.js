import React from 'react'
import {Shoe} from './index'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteShoe, getShoes} from '../store'
import Pagination from './Pagination'

class AllShoes extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: null,
      totalPages: null,
      currentShoes: []
    }
    this.onClickHandler = this.onClickHandler.bind(this)
    this.slicedShoes = this.slicedShoes.bind(this)
  }
  componentDidMount() {
    this.props.getShoes()
  }
  slicedShoes(offset, pageLimit) {
    return this.state.currentShoes.slice(offset, offset + pageLimit)
  }
  onPageChanged = data => {
    const {currentPage, totalPages, pageLimit} = data
    const offset = (currentPage - 1) * pageLimit

    const currentShoes = this.slicedShoes(offset, pageLimit)

    this.setState({currentPage, totalPages, currentShoes})
  }
  onClickHandler(shoes, brand) {
    this.setState({currentShoes: shoes.filter(shoe => shoe.brand === brand)})
  }

  render() {
    const {user} = this.props
    const {currentShoes, currentPage, totalPages} = this.state
    const totalNumberOfShoes = this.props.shoes.length

    if (totalNumberOfShoes === 0) return null

    return (
      <div className="all-shoes">
        <div className="filter">
          <button
            type="button"
            onClick={() => this.onClickHandler(this.props.shoes, 'Nike')}
          >
            Nike
          </button>
          <button
            type="button"
            onClick={() => this.onClickHandler(this.props.shoes, 'Adidas')}
          >
            Adidas
          </button>
          <button
            type="button"
            onClick={() => this.onClickHandler(this.props.shoes, 'Converse')}
          >
            Converse
          </button>
          <button
            type="button"
            onClick={() => this.onClickHandler(this.props.shoes, 'Reebok')}
          >
            Reebok
          </button>
          <button
            type="button"
            onClick={() => this.setState({currentShoes: this.props.shoes})}
          >
            All Shoes
          </button>
        </div>
        {!this.props.shoes || this.props.shoes.length === 0 ? (
          <h1>No shoes here!</h1>
        ) : (
          <div>
            <div>
              <h1>ALL {this.props.shoes.length} SHOES LEFT IN STOCK</h1>
              <hr />
              {currentPage && (
                <span>
                  Page <span>{currentPage}</span> / <span>{totalPages}</span>
                </span>
              )}
            </div>
            <div>
              <Pagination
                totalRecords={totalNumberOfShoes}
                pageLimit={10}
                pageNeighbors={2}
                onPageChanged={this.onPageChanged}
              />
            </div>
            <div>
              {currentShoes.map(shoe => {
                return (
                  <div key={shoe.id} className="shoe">
                    <Link to={'/shoes/' + shoe.id}>
                      <Shoe shoe={shoe} />
                    </Link>
                    {user.isAdmin ? (
                      <button
                        className="btn red accent-2"
                        type="button"
                        onClick={() => this.props.delete(shoe.id)}
                      >
                        delete{' '}
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  shoes: state.shoes
})
const mapDispatchToProps = dispatch => ({
  getShoes: () => dispatch(getShoes()),
  delete: id => {
    dispatch(deleteShoe(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(AllShoes)
