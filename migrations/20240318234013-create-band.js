'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specialRequests: {
        type: Sequelize.STRING
      },
      adminId: {
        type: Sequelize.INTEGER
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

    // Inserting initial band data
    await queryInterface.bulkInsert('Bands', [
      { name: 'Empire of the Sun', genre: 'Electronic', specialRequests: 'None', adminId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Foster the People', genre: 'Indie Pop', specialRequests: 'Stage setup preferences', adminId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'The 1975', genre: 'Pop Rock', specialRequests: 'Green room requirements', adminId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bipolar Sunshine', genre: 'Alternative', specialRequests: 'Specific lighting effects', adminId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bands');
  }
};

