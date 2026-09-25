import FindMyWay from 'find-my-way';
import * as facilitiesController from '../controllers/facilitiesController.js';
import {getHome} from '../controllers/homeController.js';
import * as associationController from '../controllers/AssociationController.js';
import * as activityController from '../controllers/activitieController.js';
import * as famillesController from '../controllers/familleController.js';


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
router.post('/associations/:id', associationController.deleteAssociation);

// les routes pour activities 
router.get('/activities',activityController.getActivities);
router.get('/activities/:id', activityController.getActivitieById);
router.post('/activities',activityController.createActivitie);
router.put( '/activities/:id', activityController.updateActivitie);
router.post('/activities/:id',  activityController.deleteActivitie);

//les routes pour la gestion des famillies
router.get("/familles", famillesController.getFamilles);
router.get("/familles/:id", famillesController.getFamilleById);
router.post("/familles", famillesController.createFamille);



export default router;