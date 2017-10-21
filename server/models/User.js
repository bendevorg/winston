module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
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
