import * as repository from '../repositories/Repository.js';



export const getAllFacillities = () => {

    return repository.findAll('facilities');
}

export const getFacillitieById = (id) => {

    return repository.findById('facilities', id);
}


export const createFacillitie = (data) => {
    return repository.create('facilities', data);
};


export const updateFacillitie = (id, data) => {
    return repository.update('facilities', id, data);
};


export const deleteFacillitie = (id) => {
    return repository.remove('facilities', id);
};




