module.exports = (db, DataTypes) => {
  const Worker = db.define(
    'Worker',
    {
      worker_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      card_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      area: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      starts: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      ends: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING(50),
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Worker;
};
