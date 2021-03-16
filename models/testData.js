// A Car has a number, volume, and model column.
module.exports = function (sequelize, DataTypes) {
  const TestData = sequelize.define("TestData", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return TestData;
};
