const RoleService = require('../services/RoleService')

exports.all = async (req, res, next) => {
  try {
    const roles = await RoleService.getAllRoles()
    req.data = roles
    next()
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  const data = req.body

  try {
    const role = await RoleService.create(data)
    req.data = role
    next()
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  const { id } = req.params

  try {
    const role = await RoleService.getRoleById(id)
    req.data = role
    next()
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  const { id } = req.params
  const data = req.body

  try {
    const role = await RoleService.updateById(id, data)
    req.data = role
    next()
  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  const { id } = req.params
  try {
    const role = await RoleService.removeById(id)
    req.data = role
    next()
  } catch (error) {
    next(error)
  }
}
