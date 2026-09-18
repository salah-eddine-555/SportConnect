import * as service from '../services/AssocaitionServices.js';


export const getAssociations = async (req, res) => {
    try {

        const associations = await service.getAllAssociations();

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(associations));

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};

// export const getAssociationById()

export const getAssociationById = async (req, res) => {
    try {

        const id = req.url.split('/')[2];

        const association = await service.getAssociationById(id);

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(association));

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};


export const createAssociation = async (req, res) => {

    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {

        try {

            const data = JSON.parse(body);

            const association = await service.createAssociation(data);

            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(association));

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


export const updateAssociation = async (req, res) => {

    const id = req.url.split('/')[2];

    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {

        try {

            const data = JSON.parse(body);

            const association = await service.updateAssociation(id, data);

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(association));

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


export const deleteAssociation = async (req, res) => {

    try {

        const id = req.url.split('/')[2];

        const association = await service.deleteAssociation(id);

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(association));

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};