const UserModel = require('../../models').User;

const saltRounds = parseInt(process.env.SALT);

exports.getAll = async () => {
  try {
    const users = await UserModel.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (id) => {
  try {
    const user = await UserModel.find({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};

exports.create = (data) => {
  try {
    // bcrypt.hash(data.password, saltRounds, async (err, hash) => {
    //   if (!err) {
    //     data.password = hash
    //     const user = await UserModel.create(data)
    //     return user
    //   } else {
    //     throw err
    //   }
    // })
  } catch (error) {
    throw error;
  }
};

exports.updateById = async (id, data) => {
  try {
    const user = await UserModel.find({ where: { id } });
    const obj = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        obj[key] = data[key];
      }
    }

    const newUser = await user.updateAttributes(obj);
    return newUser;
  } catch (error) {
    throw error;
  }
};

exports.removeById = async (id) => {
  try {
    const data = await UserModel.destroy({ where: { id } });
    return data;
  } catch (error) {
    throw error;
  }
};
