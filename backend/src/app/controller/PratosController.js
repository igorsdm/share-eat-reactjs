import * as Yup from 'yup';

import Pratos from '../models/Pratos';

class PlacesController {
  async index(req, res) {
    const { idPlace } = req.params;

    const pratos = await Pratos.findAll({
      where: {
        id_place: idPlace,
      },
    });

    if (pratos.length === 0) {
      return res.json({ message: 'Não há pratos cadastrados' });
    }

    return res.json({ pratos });
  }

  async store(req, res) {
    const regex = new RegExp(/^(\d+)(,\d{1,2}|\.\d{1,2})?$/);

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.string()
        .matches(regex)
        .required(),
      desc: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body.data))) {
      return res.status(400).json('Falha na validação');
    }

    const { name, price, desc } = req.body.data;
    const { idPlace } = req.params;

    const newPrato = await Pratos.create({
      id_place: idPlace,
      nome: name,
      preco: price,
      descricao: desc,
    });

    if (!newPrato) {
      return res.status(500).json('Houve um problema, tente mais tarde');
    }

    return res.status(201).json('Prato registrado com sucesso');
  }
}

export default new PlacesController();
