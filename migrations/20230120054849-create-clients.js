'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName:{
        type:Sequelize.STRING,
        validate:{
          notEmpty:{
            args:true,
            msg:'First Name is required'
          }
        }
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
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
      type:Sequelize.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Password is required'
        }
      }
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
    await queryInterface.dropTable('clients');
  }
};