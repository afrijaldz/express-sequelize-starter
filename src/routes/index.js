module.exports = (express) => {
  const router = express.Router()

  router.use('/users', require('./UserRoutes'))
  router.use('/roles', require('./RoleRoutes'))
  router.use('/auth', require('./AuthRoutes'))
  
  return router
}
