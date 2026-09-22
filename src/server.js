import {createServer} from "node:http";
import {testeDatabase} from './config/db.js';
import router from './routes/index.js';
import serveStatic from 'serve-static';

const hostname = '0.0.0.0';
const port  = 3000;

const serve = serveStatic('src/public');

const server = createServer((req, res) => {
    


    serve(req, res, () => {
        router.lookup(req, res);
    })
    
 
})

server.listen(port, hostname, async () => {
   
    console.log(`server runing at http://${hostname}: ${port}/`);
    await testeDatabase();
});

