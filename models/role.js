'use strict';

module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {
      underscored: true,
  });

  Role.associate = function(models) {
    Role.hasMany(models.User);
  };

  return Role;
};