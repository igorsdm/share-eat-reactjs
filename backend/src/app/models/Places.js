import Sequelize, { Model } from 'sequelize';

class Places extends Model {
  static init(sequelize) {
    super.init(
      {
        id_place: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'places',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Pratos, {
      foreignKey: 'id_place',
    });
  }
}

export default Places;
