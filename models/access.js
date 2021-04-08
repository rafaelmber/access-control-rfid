const { DataTypes } = require('sequelize');
const db = require('../database');
const { model, authenticate } = require('../database');
const { increment } = require('./worker');
const Worker = require('./worker');

const Access = db.define(
  'Access',
  {
    access_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
  }
);
Worker.hasOne(Access, { foreignKey: 'worker_id' });
Access.belongsTo(Worker, { foreignKey: 'worker_id' });

console.log(db.models);
db.sync();

module.exports = Access;
