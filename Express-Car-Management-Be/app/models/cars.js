'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cars.belongsTo(models.Users, {foreignKey: 'createdBy', as: 'userCreate'})
      Cars.belongsTo(models.Users, {foreignKey: 'updatedBy', as: 'userUpdate'})
      Cars.belongsTo(models.Users, {foreignKey: 'deletedBy', as: 'userDelete'})
    }
  }
  Cars.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tahun: {
      type: DataTypes.INTEGER,
    },
    noPlat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.BIGINT,
    },
    fotoMobil: {
      type: DataTypes.TEXT,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};