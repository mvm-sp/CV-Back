const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvskill');


router.route('/api/v1/cvskill')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvskillsearch')
            .get(controller.search);

router.route('/api/v1/cvskill/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
