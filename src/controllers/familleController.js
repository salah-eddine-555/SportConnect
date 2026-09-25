import * as service from "../services/famillesService.js";
import { render } from "../utils/render.js";


import * as service from "../services/famillesService.js";
import { render } from "../utils/render.js";

export const getFamilles = async (req, res) => {
    try {

        const familles = await service.getFamilles();

        await render("/familles/index", {
            familles
        }, res);

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

export const createFamille = async (req, res) => {

    try {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {

            const data = JSON.parse(body);

            const famille = await service.createFamille(data);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(famille));
        });

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

export const getFamilleById = async (req, res, params) => {

    try {

        const id = params.id;

        const famille = await service.getFamilleById(id);

        if (!famille) {

            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            return res.end(JSON.stringify({
                message: "Famille not found"
            }));
        }

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(famille));

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