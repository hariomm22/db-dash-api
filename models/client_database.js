'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client_database extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      client_database.belongsToMany(models.clients, { through: 'client_database_mapping', foreignKey: 'databaseId' })
      client_database.hasMany(models.database_tables, { foreignKey: 'id' });
    }
  }
  client_database.init({
    dbName:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"Untitled"
    },
    connectionUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'client_database',
  });
  return client_database;
};