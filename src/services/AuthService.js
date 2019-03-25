const { Op } = require('sequelize');
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
    console.log(error);
    throw error;
  }
};
