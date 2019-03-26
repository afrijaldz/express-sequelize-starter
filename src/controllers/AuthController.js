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
    req.data = null;
    req.message = error;
    req.status = 'ERROR';
    next();
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await AuthService.login({ email, password });
    req.data = user;
    req.meta = { token };

    next();
  } catch (error) {
    console.log(error);
    req.data = null;
    req.message = error;
    req.status = 'ERROR';
    next();
  }
};
