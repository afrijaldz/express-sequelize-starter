const AuthMiddleware = require('../middlewares/AuthMiddleware');

// const userRoutes = require('./UserRoutes');
const authRoutes = require('./AuthRoutes');
const roleRoutes = require('./RoleRoutes');

module.exports = (express) => {
  const router = express.Router();

  router.use('/auth', authRoutes);
  router.use('/roles', AuthMiddleware, roleRoutes);

  return router;
};
