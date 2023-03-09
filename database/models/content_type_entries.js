'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_type_entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  content_type_entries.init({
    contentTypeId: DataTypes.INTEGER,
    values: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'content_type_entries',
  });
  return content_type_entries;
};