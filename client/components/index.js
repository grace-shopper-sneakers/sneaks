/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as SingleShoe} from './SingleShoe'
export {default as Shoe} from './Shoe'
export {default as AllShoes} from './AllShoes'
export {default as AllOrders} from './AllOrders'
export {default as Order} from './Order'
export {default as SingleOrder} from './SingleOrder'
export {default as AddShoe} from './AddShoe'
export {default as Checkout} from './Checkout'
export {default as Cart} from './Cart'
export {default as ShippingForm} from './ShippingForm'
export {default as CheckoutPage} from './CheckoutPage'
export {default as CheckoutStripe} from './CheckoutStripe'
