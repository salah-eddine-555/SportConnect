import ejs from 'ejs';
import render from '../utils/render.js';



export const getHome = async(req, res) => {

    try{
        const content = await render('/home/index');

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.end(content);

    }catch(e){
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end(`Error : ${e.message}`);

    }
}