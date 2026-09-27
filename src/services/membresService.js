import * as repository from "../repositories/Repository.js";

export const getFamilles = () => {
    return repository.findAll("familles");
};

export const createMembre = (data) => {
    return repository.create("membres", data);
};


export const getMembres = () => {
    return repository.findAll("membres");
}