const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvhistory');


router.route('/api/v1/cvhistory')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvhistorysearch')
            .get(controller.search);

router.route('/api/v1/cvhistory/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);     
            
 
router.route('/api/v1/resume/:id/:lang')
            .get(controller.getResume)                

module.exports = router;
