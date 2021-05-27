const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvowner');


router.route('/api/v1/cvowner')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvownersearch')
            .get(controller.search);

router.route('/api/v1/cvowner/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
