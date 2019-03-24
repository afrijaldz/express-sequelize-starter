const userRoutes = require('./UserRoutes');

module.exports = (express) => {
  const router = express.Router();

  router.use('/users', userRoutes);

  return router;
};
