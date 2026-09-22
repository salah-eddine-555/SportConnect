import * as service from '../services/facillitiesService.js';
import render from '../utils/render.js';



export const getFacillities = async(req, res) =>{ 
    try{
        
        const facilities = await service.getAllFacillities();
        const content = await  render("/facilities/index", { facilities});

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

           res.end(content);
        // res.end(JSON.stringify(facillities));

    }catch(e){
        res.writeHead(500, { 'Content-Type': 'text/html'});
        res.end(`<h1>Error: ${e.message}</h1>`);
    }   
}

export const getFacillitieById = async (req, res, params) => {

    try{
        const id = params.id;
        
        const facillitie = await service.getFacillitieById(id);

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(facillitie));

    }catch(e){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: e.message}));

    }
}

export const createFacillitie = async (req, res) => {

    try {

        let body = '';

        req.on('data', part => {
            body += part;
        });

        req.on('end', async () => {

            const data = JSON.parse(body);

            const facillitie = await service.createFacillitie(data);

            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(facillitie));
        });

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};

export const updateFacillitie = async (req, res, parms) => {

    try {

        const id = parms.id;

        let body = '';

        req.on('data', part => {
            // console.log(part)
            body += part;
        });

        req.on('end', async () => {

            const data = JSON.parse(body);

            const facillitie = await service.updateFacillitie(id, data);

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(facillitie));
        });

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};

export const deleteFacillitie = async (req, res, params) => {
    console.log("tetetettetetetetetetetet")

    try {
        // console.log(params.id);
        const id = params.id;
        
        // const facilities = service.deleteFacilitie(id);
         await service.deleteFacillitie(id);

        res.writeHead(302, {
            'Location': '/facilities',
        });

        res.end();

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};