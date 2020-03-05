//Middleware functions to stay DRY

const adminsOnly = (req, res, next) => {
  if (!req.user || (req.user && !req.user.isAdmin)) {
    const error = new Error('You are not authorized to do that')
    error.status = 401
    return next(error)
  } else {
    next()
  }
}

// const isUserOrAdmin = (req, res, next) => {
//   if (req.params.id == req.user.id || req.user.isAdmin) // if user is authenticated in the session, carry on
//       return next();
//   res.redirect('/');     // if they aren't redirect them to the home page
// }

module.exports = {
  adminsOnly
}
