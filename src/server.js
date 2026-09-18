import {createServer} from "node:http";
import {testeDatabase} from './config/db.js';
import {getFamilies} from './controllers/familliesController.js';

const hostname = '0.0.0.0';
const port  = 3000;


const server = createServer(async(req, res) => {
    
     if(req.method === 'GET' && req.url === "/facilities") {
        await getFamilies(req, res);
        return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

     res.end(JSON.stringify({
        message: "Route not found"
    }));
})

server.listen(port, hostname, async () => {
   
    console.log(`server runing at http://${hostname}: ${port}/`);
    await testeDatabase();
})

