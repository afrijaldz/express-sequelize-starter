const userRoutes = require('./UserRoutes');
const authRoutes = require('./AuthRoutes');

module.exports = (express) => {
  const router = express.Router();

  router.use('/users', userRoutes);
  router.use('/auth', authRoutes);

  return router;
};
