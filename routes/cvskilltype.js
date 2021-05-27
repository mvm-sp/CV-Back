const express = require('express');
const router = express.Router();
const controller = require('../controllers/cvskilltype');


router.route('/api/v1/cvskilltype')
            .get(controller.getAll)
            .post(controller.add);

router.route('/api/v1/cvskilltypesearch')
            .get(controller.search);

router.route('/api/v1/cvskilltype/:id')
            .get(controller.getById)
            .put(controller.update)
            .delete(controller.remove);            

module.exports = router;
