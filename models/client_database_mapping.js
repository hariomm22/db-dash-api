'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client_database_mapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  client_database_mapping.init({
    clientId:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    databaseId: {
      type:DataTypes.INTEGER,
      primaryKey:true
    }
  }, {
    sequelize,
    modelName: 'client_database_mapping',
  });
  return client_database_mapping;
};