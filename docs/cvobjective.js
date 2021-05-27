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
 * @api {get} /cvobjective/ Read all data of a cvobjective
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvobjective
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvobjective data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjective/
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     description          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "idlanguage": "", 
 *       "description": "", 
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
 * @api {get} /cvobjective/:id Read data of a cvobjective by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvobjective data
 *
 * @apiParam {String} id The cvobjective-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjective/4711
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     description          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "idlanguage": "", 
 *       "description": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /cvobjective/ Search data of a cvobjective by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvobjective
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvobjective data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjectivesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     description          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "idlanguage": "", 
 *       "description": "", 
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
 * @api {post} /cvobjective Create a new cvobjective record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvobjective
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvobjective 
 * 
 * @apiParam {int4}     idowner          Description
 * @apiParam {int4}     idlanguage          Description
 * @apiParam {varchar}     description          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjective/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvobjective/:id Update the cvobjective data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvobjective
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvobjective 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjective/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvobjective/:id  Delete data of a cvobjective by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvobjective
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvobjective
 *
 * @apiParam {Number} id The cvobjective-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvobjective/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

