'use strict';
const bycrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'faisal',
        profession: 'developer',
        role: 'admin',
        email: 'one@gmail.com',
        password: await bycrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'wafa',
        profession: 'qc',
        role: 'student',
        email: 'two@gmail.com',
        password: await bycrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) { 
     await queryInterface.bulkDelete('users', null, {}); 
  }
};
