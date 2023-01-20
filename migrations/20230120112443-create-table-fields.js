'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('table_fields', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fieldName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      fieldType: {
        type: Sequelize.STRING,
        allowNull : false 

      },
      isRequired: {
        type: Sequelize.BOOLEAN,
        defaultValue:false 
      },
      tableId: {
        type: Sequelize.INTEGER,
        references : {
            model : 'database_tables',
            key : 'id'

        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('table_fields');
  }
};