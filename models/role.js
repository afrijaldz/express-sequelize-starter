'use strict';

module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });

  role.prototype.toJSON = function () {
    let role = Object.assign({}, this.get());
    role.id = hashids.encode(role.id)

    return role;
  }

  role.associate = function(models) {
    role.hasMany(models.user)
  };

  return role;
};