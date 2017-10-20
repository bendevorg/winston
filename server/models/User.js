module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    battletag: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      notEmpty: true
    }
  });

  return User;
};
