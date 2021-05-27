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
 * @api {get} /cvowner/ Read all data of a cvowner
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvowner
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvowner data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvowner/
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
 * @api {get} /cvowner/:id Read data of a cvowner by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvowner data
 *
 * @apiParam {String} id The cvowner-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvowner/4711
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
 * @api {get} /cvowner/ Search data of a cvowner by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvowner
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvowner data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvownersearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
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
 * @api {post} /cvowner Create a new cvowner record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvowner
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvowner 
 * 
 * @apiParam {varchar}     name          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvowner/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvowner/:id Update the cvowner data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvowner
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvowner 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvowner/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvowner/:id  Delete data of a cvowner by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvowner
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvowner
 *
 * @apiParam {Number} id The cvowner-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvowner/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

