const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'Image',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      route: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
}