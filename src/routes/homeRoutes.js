import * as home from '../controllers/homeController.js';

export const homeRouter = async (req, res) => {

    switch (true) {

        case req.method === 'GET' && req.url === '/':
            await home.getHome(req, res);
            return true;

        default:
            return false;
    }
};