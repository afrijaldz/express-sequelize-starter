const bcrypt = require('bcrypt')
const UserModel = require('../../models').User
const { Op } = require('sequelize')

exports.login = async (username, password) => {
  try {
    const user = await UserModel.findOne({
      where: {
        [Op.or]: [
          { email: username },
          { username }
        ]
      }
    })

    if (!user) {
      const error = new Error('User not found')
      throw error
    } else {

    }

    const match = await bcrypt.compare(password, user.passwordHash)

    if (match) {
      // login
    }
  } catch (error) {
    throw error
  }
}
