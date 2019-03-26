const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: error.message,
      meta: null,
      data: null,
    });
  }
};
