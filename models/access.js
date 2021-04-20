module.exports = (db, DataTypes) => {
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
  return Access;
};
/*
Worker.hasOne(Access, { foreignKey: 'worker_id' });
Access.belongsTo(Worker, { foreignKey: 'worker_id' });

console.log(db.models);
db.sync();

module.exports = Access;
*/
