'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  },
  {
    underscored: true,
  });

  User.prototype.toJSON = function () {
    let user = Object.assign({}, this.get());

    delete user.password;
    return user;
  }

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};