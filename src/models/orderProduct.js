const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'OrderProduct',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
}