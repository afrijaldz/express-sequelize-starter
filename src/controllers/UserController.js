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

exports.store = async (req, res, next) => {
  const data = req.body
  try {
    const user = await UserService.store(data)
    
    return user
  } catch (error) {
    throw error
  }
}