'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsToMany(models.client_database, { through: 'client_database_mapping', foreignKey: 'clientId' })
    }
  }
  clients.init({
    firstName:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'First Name is required'
        }
      }
    },
    lastName: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
          isEmail: {
              args: true,
              msg: 'Invalid email address'
          },
          notEmpty: {
              args: true,
              msg: 'Email is required'
          }
      }
  },
    
  password:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Password is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};