import { Router } from 'express';

import PlacesController from './app/controller/PlacesController';
import PratosController from './app/controller/PratosController';

const routes = new Router();

routes.get('/places', PlacesController.index);
routes.get('/place/:idPlace', PlacesController.show);
routes.get('/dishes/:idPlace', PratosController.index);
routes.post('/dishes/:idPlace/add', PratosController.store);

export default routes;
