import * as service from '../services/AssocaitionServices.js';
import render from '../utils/render.js';
import {getAllFacillities} from '../services/facillitiesService.js';



export const getAssociations = async (req, res) => {
    try {

        const associations = await service.getAllAssociations();

        const content = await render("/associations/index", {associations});

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(content);

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'text/html'  
        });

        res.end(`Error: ${e.message}`);
    }
};

// export const getAssociationById()

export const getAssociationById = async(req, res, parms) => {
    try {

        const id = parms.id;

        const association = await service.getAssociationById(id);
        const activities = await service.getActivitiesByAssociation(id);
        const facilities = await getAllFacillities();

        const content = await render("/associations/details", {association, activities, facilities});

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(content);

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


export const updateAssociation = async (req, res, parms) => {

    const id = parms.id;

    let body = '';

    req.on('data', data => {
        body += data;
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


export const deleteAssociation = async (req, res, parms) => {
    console.log("entre delete association executer");
    console.log(parms);
    try {
        const id = parms.id;

        const association = await service.deleteAssociation(id);

        res.writeHead(302, {
            'Location': '/associations'
        });

        res.end();
    }catch (e) {
       res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: e.message
        }));
    }
};