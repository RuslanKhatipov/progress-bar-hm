const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Anket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anket.hasMany(models.Answer, { foreignKey: 'anketId' });
      Anket.belongsTo(models.Position, { foreignKey: 'posId' });
      Anket.hasMany(models.List, { foreignKey: 'anketId' });
    }
  }
  Anket.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    url: DataTypes.STRING,
    posId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Anket',
  });
  return Anket;
};
