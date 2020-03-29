import Sequelize, { Model } from 'sequelize';

class Pratos extends Model {
  static init(sequelize) {
    super.init(
      {
        id_prato: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nome: Sequelize.INTEGER,
        preco: Sequelize.NUMBER,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'pratos',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Places, {
      foreignKey: 'id_place',
    });
  }
}

export default Pratos;
