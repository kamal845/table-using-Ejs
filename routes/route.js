const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Define routes and map them to controller functions
router.get('/', controller.renderHome);
router.get('/home', controller.getHomeData);
router.post('/', controller.createTable);
router.post('/home', controller.createTable);
router.get('/create', controller.renderCreate);
router.get('/create/', controller.redirectHome);
 
// Edit Route
router.get('/edit/:id', controller.renderEditPage);
// Update Route
router.post('/update/:id', controller.updateTable);

router.post('/delete/:id', controller.deleteTable); 

module.exports = router;
