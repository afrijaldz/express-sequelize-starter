'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    fullname: DataTypes.STRING
  }, {
    underscored: true,
  });
  
  User.associate = function(models) {
    User.belongsTo(models.Role)
  };
  
  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  }

  return User;
};