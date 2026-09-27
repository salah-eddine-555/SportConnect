import * as service from "../services/membresService.js";
import render  from "../utils/render.js";
import {createFamille} from '../services/famillesService.js';

export const getCreateMembre = async (req, res) => {
    try {

        const familles = await service.getFamilles();
        const membres = await service.getMembres();

        const html = await render(
            "/membres/create",
            { familles, membres },
        );
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        res.end(html);

    } catch (e) {

        console.error(e);

        res.writeHead(500, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: e.message
        }));
    }
};

export const createMembre = async (req, res) => {

    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", async () => {

        try {

            const data = JSON.parse(body);

            // console.log('data membre ', data); return ;

            let familleId = data.famille_id;

            if(data.famille_id  === "new"){
                const famillie = await createFamille(data.new_family_name);
                console.log(famillie); return;
                familleId = famillie.id;
            }

            const membre = await service.createMembre({
                first_name : data.first_name,
                last_name: data.last_name,
                email: data.email,
                birth_date: data.birth_date,
                famille_id:  familleId

            });
            

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(membre));

        } catch (e) {

            console.error(e);

            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: e.message
            }));
        }
    });
};