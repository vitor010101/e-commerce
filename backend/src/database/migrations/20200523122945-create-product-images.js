module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_images', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      product_id: {
        type: Sequelize.STRING,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },        
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      src: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('product_images');
  }
};
