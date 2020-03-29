import Places from '../models/Places';
import Pratos from '../models/Pratos';

class PlacesController {
  async index(req, res) {
    const places = await Places.findAll({});

    const newPlaces = await Promise.all(
      places.map(async place => {
        const count = await Pratos.count({
          where: {
            id_place: place.id_place,
          },
        });

        const newPlace = {
          idPlace: place.id_place,
          name: place.name,
          pratos: count,
        };

        return newPlace;
      })
    );

    return res.json({ newPlaces });
  }

  async show(req, res) {
    const { idPlace } = req.params;
    const place = await Places.findOne({
      where: {
        id_place: idPlace,
      },
    });

    return res.json({ place });
  }
}

export default new PlacesController();
