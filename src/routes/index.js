import { facilitiesRoutes } from './facilitiesRoutes.js';
import { activitiesRoutes } from './activitiesRoutes.js';
import { associationsRoutes } from './associationsRoutes.js';


export const routes = (req, res) => {

    let handled;

    handled = facilitiesRoutes(req, res);
    if (handled) return true;

    handled = activitiesRoutes(req, res);
    if (handled) return true;

    handled = associationsRoutes(req, res);
    if (handled) return true;

    handled = usersRoutes(req, res);
    if (handled) return true;

    return false;
};