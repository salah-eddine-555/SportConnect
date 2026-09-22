import * as repository from '../repositories/Repository.js';

export const getAllAssociations = () => {
    return repository.findAll('association');
};

export const getAssociationById = (id) => {
    return repository.findById('association', id);
};

export const createAssociation = (data) => {
    return repository.create('association', data);
};

export const updateAssociation = (id, data) => {
    return repository.update('association', id, data);
};

export const deleteAssociation = (id) => {
    return repository.remove('association', id);
};