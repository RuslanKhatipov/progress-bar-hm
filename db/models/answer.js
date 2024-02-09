const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.Question, { foreignKey: 'questId' });
      Answer.belongsTo(models.Anket, { foreignKey: 'anketId' });
     // Answer.hasMany(models.List, { foreignKey: 'answerId' });
    }
  }
  Answer.init({
    anketId: DataTypes.INTEGER,
    questId: DataTypes.INTEGER,
    answer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
