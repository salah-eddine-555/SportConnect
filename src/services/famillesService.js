import * as repository from "../repositories/Repository.js";

export const createFamille = (data) => {
    return repository.create("familles", data);
};

export const getFamilles = () => {
    return repository.findAll("familles");
};

export const getFamilleById = (id) => {
    return repository.findById("familles", id);
};

export const updateFamille = (id, data) => {
    return repository.update("familles", id, data);
};

export const deleteFamille = (id) => {
    return repository.remove("familles", id);
};
