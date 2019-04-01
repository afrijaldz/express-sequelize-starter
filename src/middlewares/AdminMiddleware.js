const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    if (decoded.role_id === 1) {
      req.user = decoded;
      next();
    } else {
      throw new Error('you are not administrator');
    }
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: error.message,
      meta: null,
      data: null,
    });
  }
};
