'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_fields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_fields.belongsTo(models.database_tables , {foreignKey:'id'} )
    }
  }
  table_fields.init({
    fieldName: {
      type: DataTypes.STRING,
      allowNull : false
    },
    fieldType: {
      type: DataTypes.STRING,
      allowNull : false 

    },
    isRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue:false 
    },
    tableId: {
      type: DataTypes.INTEGER,
      references : {
          model : 'database_tables',
          key : 'id'
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
    }
    
  }, {
    sequelize,
    modelName: 'table_fields',
  });
  return table_fields;
};