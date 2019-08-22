'use strict'

const Hashids = require('hashids')
const hashids = new Hashids()

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  {
    underscored: true,
  })

  user.prototype.toJSON = function () {
    let user = Object.assign({}, this.get())
    user.id = hashids.encode(user.id)

    delete user.password
    return user
  }

  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.role)
  }

  return user
}
