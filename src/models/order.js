const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date_order: {
        type: DataTypes.DATE,
        allowNull: false
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
}