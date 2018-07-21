const UserService = require('../services/UserService')

exports.all = async (req, res, next) => {
  try {
    const users = await UserService.all()
  
    req.data = users
    next()
    
  } catch (error) {
    throw error
  }
}
