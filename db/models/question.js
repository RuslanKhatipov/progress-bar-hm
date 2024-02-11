const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Position, { foreignKey: 'posId' });
      Question.hasMany(models.Answer, { foreignKey: 'questId' });
    }
  }
  Question.init({
    question: DataTypes.TEXT,
    posId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
