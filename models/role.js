'use strict';

module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});

  Role.associate = function(models) {
    Role.hasMany(models.User);
  };

  return Role;
};