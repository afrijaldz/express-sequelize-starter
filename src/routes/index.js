module.exports = (express) => {
  const router = express.Router()

  router.use('/users', require('./UserRoutes'))
  router.use('/roles', require('./RoleRoutes'))
  
  return router
}
