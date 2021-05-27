const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvobjective');


router.route('/api/v1/cvobjective')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvobjectivesearch')
            .get(controller.search);

router.route('/api/v1/cvobjective/:id/:lang')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
