const jwt = require('jsonwebtoken');
const hashpassword = require('../helpers/hashpassword');

const UserModel = require('../../models').User;

exports.register = async ({
  name,
  password,
  email,
  phone,
}) => {
  try {
    const user = await UserModel.create({
      name,
      password: await hashpassword(password),
      email,
      phone,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

exports.login = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });

    const token = jwt.sign(user.toJSON(), process.env.JWT_KEY, {
      expiresIn: '1d',
    });

    return { user, token };
  } catch (error) {
    throw error;
  }
};
