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
      message: {
        type: DataTypes.STRING(15),
        allowNull: false,
        default: 'unknown.png',
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Access;
};
