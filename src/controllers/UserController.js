const UserService = require('../services/UserService')

exports.all = async (req, res, next) => {
  try {
    const users = await UserService.all()
    req.data = users
    next()
    
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  const { id } = req.params

  try {
    const user = await UserService.getById(id)
    req.data = user
    next()
    
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  const data = req.body

  try {
    const user = await UserService.create(data)
    req.data = user
    next()
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  const { id } = req.params
  const data = req.body

  try {
    const user = await UserService.updateById(id, data)
    req.data = user
    next()

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  const { id } = req.params

  try {
    const user = await UserService.removeById(id)
    req.data = user
    next()

  } catch (error) {
    next(error)
  }
}