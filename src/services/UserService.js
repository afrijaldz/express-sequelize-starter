const UserModel = require('../../models').User
const bcrypt = require('bcrypt')
const saltRounds = process.env.SALT

exports.getAll = async () => {
  try {
    const users = await UserModel.findAll()
    return users

  } catch (error) {
    throw error
  }
}

exports.getById = async (id) => {
  try {
    const user = await UserModel.find({ where: { id } })
    return user
    
  } catch (error) {
    throw error
  }
}

exports.create = async data => {
  try {
    console.log(data)
    bcrypt.hash('okee', saltRounds, function (err, hash) {
      console.log(hash)
    });

    // const user = await UserModel.create(data)
    // return user
  } catch (error) {
    throw error
  }
}

exports.updateById = async (id, data) => {
  try {
    const user = await UserModel.find({ where: { id } });
    
    const obj = {}
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        obj[key] = data[key]
      }
    }

    const newUser = await user.updateAttributes(obj)
    return newUser

  } catch (error) {
    throw error
  }
}

exports.removeById = async id => {
  try {
    const data = await UserModel.destroy({ where: { id } })
    return data
    
  } catch (error) {
    throw error
  }
}