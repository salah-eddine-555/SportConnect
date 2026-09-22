import FindMyWay from 'find-my-way';
import * as facilitiesController from '../controllers/facilitiesController.js';
import {getHome} from '../controllers/homeController.js';
import * as associationController from '../controllers/AssociationController.js';

const router = FindMyWay();


router.get("/" , getHome);

router.get('/facilities',facilitiesController.getFacillities);
router.get("/facilities/:id", facilitiesController.getFacillitieById)
router.post('/facilities',facilitiesController.createFacillitie);
router.put('/facilities/:id',facilitiesController.updateFacillitie);
router.post('/facilities/:id/delete', facilitiesController.deleteFacillitie);


// les routes pour la gestion des assocaitions 
router.get('/associations',associationController.getAssociations);
router.get('/associations/:id', associationController.getAssociationById);
router.post('/associations',associationController.createAssociation);
router.put('/associations/:id',associationController.updateAssociation);
router.delete('/associations/:id', associationController.deleteAssociation);


export default router;