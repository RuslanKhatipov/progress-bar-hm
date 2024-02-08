/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Администратор', email: 'admin@admin', password: await bcrypt.hash('123', 10), isAdmin: true,
      },
      {
        username: 'Юзер', email: 'user@user', password: await bcrypt.hash('123', 10), isAdmin: false,
      },

    ], {});
    await queryInterface.bulkInsert('Lists', [
      {
        userId: 1, email: 'bob@bob', firstname: 'Bob', lastname: 'Bob', done: 6,
      },
      {
        userId: 1, email: 'beb@beb', firstname: 'Beb', lastname: 'Beb', done: 10,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
