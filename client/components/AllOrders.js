import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeOrderThunk, getOrdersThunk} from '../store'

class AllOrders extends React.Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    const {user, orders} = this.props

    return (
      <div>
        {orders.length === 0 ? (
          <h1>No Orders</h1>
        ) : user.isAdmin ? (
          orders.map(order => {
            return (
              <div key={order.id}>
                <Link to={`/orders/${order.id}`}>
                  <h2>All Customer Orders</h2>
                  <h2>Order #{order.id}</h2>
                  {order.user ? (
                    <h3>
                      Placed by: {order.user.firstName} {order.user.lastName}
                    </h3>
                  ) : (
                    ''
                  )}
                </Link>

                <button
                  type="button"
                  onClick={() => this.props.delete(order.id)}
                >
                  Delete
                </button>

                <hr />
              </div>
            )
          })
        ) : (
          orders.filter(order => order.userId === user.id).map(order => (
            <div key={order.id}>
              <Link to={`/orders/${order.id}`}>
                <h2>Order #{order.id}</h2>
              </Link>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  orders: state.orders
})
const mapDispatchToProps = dispatch => ({
  delete: id => {
    dispatch(removeOrderThunk(id))
  },
  getOrders: () => {
    dispatch(getOrdersThunk())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)
