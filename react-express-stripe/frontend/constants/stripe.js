const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_EfbfrACdRLAn8tagUY0zXs0k00qDhWTGHy'
export default STRIPE_PUBLISHABLE
