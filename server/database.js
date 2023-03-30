const { workers } = require('cluster');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const access = require('./models/access');
const worker = require('./models/worker');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '/database/company.db'),
  logging: false,
});

const Worker = worker(sequelize, DataTypes);
const Access = access(sequelize, DataTypes);
Worker.hasOne(Access, { foreignKey: 'worker_id' });
Access.belongsTo(Worker, { foreignKey: 'worker_id' });

sequelize.sync();

module.exports = sequelize;
module.exports.Worker = Worker;
module.exports.Access = Access;
