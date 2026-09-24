import * as service from '../services/activitieService.js';



export const getActivities = async (req, res) => {

    try {
        const activities = await service.getActivities();

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(activities));
    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};
export const getActivitieById = async (req, res, params) => {
    try {
        const id = params.id;
        const activity = await service.getActivitieById(id);

        if (!activity) {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });
            return res.end(JSON.stringify({
                message: 'Activity not found'
            }));
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
      res.end(JSON.stringify(activity));
    } catch (e) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: e.message
        }));
    }
};

export const createActivitie = async (req, res) => {

    let body = '';

    req.on('data', part => {
        body += part;
    });

    req.on('end', async () => {

        try {
            const data = JSON.parse(body);
            const activite = await service.createActivitie(data);
            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(activite));
        } catch (e) {
            // console.error(e);
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                message: e.message
            }));
        }
    });
};
export const updateActivitie = async (req, res, params) => {

    let body = '';

    req.on('data', part => {
        body += part;
    });

    req.on('end', async () => {
        try {
            const id = params.id;
            const data = JSON.parse(body);

            const activity = await service.updateActivitie(id, data);

            if (!activity) {
                res.writeHead(404, {
                    'Content-Type': 'application/json'
                });
                return res.end(JSON.stringify({
                    message: 'Activity not found'
                }));
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(activity));
        } catch (e) {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: e.message
            }));
        }
    });
};

export const deleteActivitie = async (req, res, params) => {
    try {
        const id = params.id;
        const activity = await service.deleteActivitie(id);
        if (!activity) {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });
            return res.end(JSON.stringify({
                message: 'Activity not found'
            }));
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(activity));
    } catch (e) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: e.message
        }));
    }
};
