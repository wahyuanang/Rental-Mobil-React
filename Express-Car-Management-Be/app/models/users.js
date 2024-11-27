'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Cars, { foreignKey: "createdBy", as: 'userCreate' })
      Users.hasMany(models.Cars, { foreignKey: "updatedBy", as: 'userUpdate' })
      Users.hasMany(models.Cars, { foreignKey: "deletedBy", as: 'userDelete' })
    }
  }
  Users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    fotoProfil: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.ENUM('superadmin', 'admin', 'member'),
      defaultValue: 'member',
      validate: {
        isIn: {
          args: [['superadmin', 'admin', 'member']],
          msg: 'Role tidak ditemukan'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};