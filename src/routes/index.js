const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');

const userRoutes = require('./UserRoutes');
const authRoutes = require('./AuthRoutes');
const roleRoutes = require('./RoleRoutes');

module.exports = (express) => {
  const router = express.Router();

  router.use('/auth', authRoutes);
  router.use('/roles', AuthMiddleware, roleRoutes);
  router.use('/users', AdminMiddleware, userRoutes);

  return router;
};
