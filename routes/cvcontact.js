const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvcontact');


router.route('/api/v1/cvcontact')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvcontactsearch')
            .get(controller.search);

router.route('/api/v1/cvcontact/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
