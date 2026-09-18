import * as service from '../services/facillitiesService.js';



export const getFacillities = async(req, res) =>{ 
    try{
        
        const facillities = await service.getAllFacillities();

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(facillities));

    }catch(e){
        res.writeHead(500, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: e.message}));
    }   
}

export const getFacillitieById = async (req, res) => {

    try{
        const id = req.url.split('/')[2];
        
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

export const updateFacillitie = async (req, res) => {

    try {

        const id = req.url.split('/')[2];

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

export const deleteFacillitie = async (req, res) => {

    try {

        const id = req.url.split('/')[2];

        const facillitie = await service.deleteFacillitie(id);

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(facillitie));

    } catch (e) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};