import * as faciillitieController from '../controllers/facilitiesController.js'


export const facillitiesRoutes = (req, res) => {


    switch (true) {

        case req.method === 'GET' && req.url === '/facilities':
            return faciillitieController.getFacillities(req, res);

        case req.method === 'GET' && req.url.startsWith('/facilities/'):
            return faciillitieController.getFacillitieById(req, res);

        case req.method === 'POST' && req.url === '/facilities':
            return faciillitieController.createFacillitie(req, res);

        case req.method === 'PUT' && req.url.startsWith('/facilities/'):
                return faciillitieController.updateFacillitie(req, res);

        case req.method === 'DELETE' && req.url.startsWith("/facilities/"):
                return faciillitieController.deleteFacillitie(req, res);
        default:
            return false;
    }
};