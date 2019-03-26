const jwt = require('jsonwebtoken');
const { hash, unhash } = require('../helpers/password');

const UserModel = require('../../models').user;

exports.register = async ({
  name,
  password,
  email,
  phone,
}) => {
  try {
    const user = await UserModel.create({
      name,
      password: await hash(password),
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

    if (!user) {
      throw new Error('User not found');
    } else {
      const result = await unhash(password, user.password);

      if (!result) {
        throw new Error('password doesn\'t match');
      } else {
        const token = jwt.sign(user.toJSON(), process.env.JWT_KEY, {
          expiresIn: '1d',
        });

        return { user, token };
      }
    }
  } catch (error) {
    throw error;
  }
};
