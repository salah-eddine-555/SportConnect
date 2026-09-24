import * as repository from '../repositories/Repository.js';




export const createActivite = (data) => {

     return repository.create('activities', data);
}

export const getActivities = () => {
    return repository.findAll('activities');
};

export const getActivitieById = (id) => {
    return repository.findById('activities', id);
};

export const updateActivitie = (id, data) => {
    return repository.update('activities', id, data);
};

export const deleteActivitie = (id) => {
    return repository.remove('activities', id);
};