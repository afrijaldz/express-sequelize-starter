const AuthService = require('../services/AuthService');

exports.register = async (req, res, next) => {
  const {
    name,
    email,
    password,
    phone,
  } = req.body;

  try {
    const userData = {
      name,
      email,
      password,
      phone,
    };

    const data = await AuthService.register(userData);
    req.data = data;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
