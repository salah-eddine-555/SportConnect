import * as service from '../services/activitieService.js'



export const getAllActivities = async(res, req, parms) => {

    try{
        
        const id = parms.id
        const activites = await service.getActivities(id);

        res.writeHead(200,{
            'Content-Type': 'application/json'
        });
        res.end(JSON.strigify(activites));

    }catch(e){
        console.log(e.message);
    }
}

export const getStatus = async(req, res) => {

    try{
        const results = await service.getStatistiques();

        res.writeHead(200, {
            'Content-type': 'application/json'
        });

        res.end(JSON.stringify(results));

    }catch(e){
        res.writeHead(500, {
            'content-type': 'application/json';
        })
        res.end(500, JSON.stringify({message: e.message}));
    }
}

export const register = async(req, res) => {

    try{
        let body = '';
        req.on('data', chunk => {
            body += chunk
        })

        req.on('end', async() => {
            const data = JSON.stringify(data);

            const result = await service.create(data);

            res.writeHead(201, {
                'Content-text': 'application/json'
            })

            res.end(JSON.stringify(result));

        })

    }catch(e){
        res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringfy({
        message: e.message
      }))
    }
}