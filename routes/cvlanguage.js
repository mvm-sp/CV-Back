const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvlanguage');


router.route('/api/v1/cvlanguage')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvlanguagesearch')
            .get(controller.search);

router.route('/api/v1/cvlanguage/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
