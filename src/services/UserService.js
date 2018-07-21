const UserModel = require('../../models').User

exports.all = async () => {
  try {
    const users = await UserModel.findAll()

    return users
  } catch (error) {
    throw error
  }
}

exports.store = async data => {
  try {
    const user = await UserModel.create(data)
    return user
  } catch (error) {
    throw error
  }
}