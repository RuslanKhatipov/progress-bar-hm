const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.belongsTo(models.User, { foreignKey: 'userId' });
      List.belongsTo(models.Anket, { foreignKey: 'anketId' });
    }
  }
  List.init({
    userId: DataTypes.INTEGER,
    anketId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
