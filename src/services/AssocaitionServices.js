import * as repository from '../repositories/Repository.js';

export const getAllAssociations = () => {
    return repository.findAll('associations');
};

export const getAssociationById = (id) => {
    return repository.findById('associations', id);
};

export const createAssociation = (data) => {
    return repository.create('associations', data);
};

export const updateAssociation = (id, data) => {
    return repository.update('associations', id, data);
};

export const deleteAssociation = (id) => {
    return repository.remove('associations', id);
};