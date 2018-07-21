const UserModel = require('../../models').user

exports.all = async () => {
  try {
    const users = await UserModel.findAll({
      include: ['role']
    })

    return users
  } catch (error) {
    throw error
  }
}