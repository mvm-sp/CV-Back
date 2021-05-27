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
 * @api {get} /cvskilltype/ Read all data of a cvskilltype
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvskilltype
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskilltype data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltype/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "name": "", 
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
 * @api {get} /cvskilltype/:id Read data of a cvskilltype by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskilltype data
 *
 * @apiParam {String} id The cvskilltype-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltype/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "name": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /cvskilltype/ Search data of a cvskilltype by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvskilltype
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvskilltype data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltypesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     name          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "name": "", 
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
 * @api {post} /cvskilltype Create a new cvskilltype record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvskilltype
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvskilltype 
 * 
 * @apiParam {varchar}     name          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltype/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvskilltype/:id Update the cvskilltype data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvskilltype
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvskilltype 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltype/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvskilltype/:id  Delete data of a cvskilltype by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvskilltype
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvskilltype
 *
 * @apiParam {Number} id The cvskilltype-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvskilltype/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

