'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class database_tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      database_tables.belongsTo(models.client_database, { foreignKey: 'id' });

    }
  }
  database_tables.init({
    tableName: DataTypes.STRING,
    dbId:{
      type:DataTypes.INTEGER,
      references:{
        model:'client_databases',
        key:'id'
      },
      onUpdate:"CASCADE",
      onDelete:"SET NULL"
    }
  }, {
    sequelize,
    modelName: 'database_tables',
  });
  return database_tables;
};