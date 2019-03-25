// const userRoutes = require('./UserRoutes');
const authRoutes = require('./AuthRoutes');

module.exports = (express) => {
  const router = express.Router();

  router.use('/auth', authRoutes);
  // router.use('/users', userRoutes);

  return router;
};
