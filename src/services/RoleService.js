/* eslint-disable no-restricted-syntax */
const RoleModel = require('../../models').role;

exports.getAll = async () => {
  try {
    const roles = await RoleModel.findAll();
    return roles;
  } catch (error) {
    throw error;
  }
};

exports.create = async (data) => {
  try {
    const role = await RoleModel.create(data);
    return role;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (id) => {
  try {
    const role = await RoleModel.findById(id);
    return role;
  } catch (error) {
    throw error;
  }
};

exports.updateById = async (id, data) => {
  try {
    const role = await RoleModel.find({ where: { id } });

    const obj = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        obj[key] = data[key];
      }
    }

    const newRole = await role.updateAttributes(obj);
    return newRole;
  } catch (error) {
    throw error;
  }
};

exports.removeById = async (id) => {
  try {
    const data = await RoleModel.destroy({ where: { id } });
    return data;
  } catch (error) {
    throw error;
  }
};
