module.exports = (express) => {
  const router = express.Router()

  router.use('/users', require('./UserRoutes'))
  
  return router
}
