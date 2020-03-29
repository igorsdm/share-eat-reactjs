import Sequelize from 'sequelize';
import path from 'path';

import Places from '../app/models/Places';
import Pratos from '../app/models/Pratos';

const models = [Places, Pratos];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize({
      dialect: 'sqlite',
      storage: path.join(__dirname, '..', 'places.sqlite'),
      define: {
        timestamps: false,
      },
    });

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
