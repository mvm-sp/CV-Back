/**
 * @apiDefine GenericError
 *
 * @apiError Generic Erro Message.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Error
 *     {
 *       "success": false,
 *       "error": "error messagem"
 *     }
 */

/**
 * @api {get} /cvskill/ Read all data of a cvskill
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvskill
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskill data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskill/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idskilltype          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {int2}     level          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idskilltype": "", 
 *       "name": "", 
 *       "level": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function getAll() { return; }

/**
 * @api {get} /cvskill/:id Read data of a cvskill by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskill data
 *
 * @apiParam {String} id The cvskill-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskill/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idskilltype          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {int2}     level          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idskilltype": "", 
 *       "name": "", 
 *       "level": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /cvskill/ Search data of a cvskill by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvskill
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskill data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskillsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idskilltype          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {int2}     level          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idskilltype": "", 
 *       "name": "", 
 *       "level": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function search() { return; }

/**
 * @api {post} /cvskill Create a new cvskill record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvskill
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvskill 
 * 
 * @apiParam {int4}     idowner          Description
 * @apiParam {int4}     idskilltype          Description
 * @apiParam {varchar}     name          Description
 * @apiParam {int2}     level          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskill/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvskill/:id Update the cvskill data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvskill
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvskill 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskill/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvskill/:id  Delete data of a cvskill by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvskill
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvskill
 *
 * @apiParam {Number} id The cvskill-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskill/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

