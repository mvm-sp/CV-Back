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
 * @api {get} /cvlanguage/ Read all data of a cvlanguage
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvlanguage
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvlanguage data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguage/
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
 * @api {get} /cvlanguage/:id Read data of a cvlanguage by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvlanguage data
 *
 * @apiParam {String} id The cvlanguage-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguage/4711
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
 * @api {get} /cvlanguage/ Search data of a cvlanguage by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvlanguage
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvlanguage data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguagesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
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
 * @api {post} /cvlanguage Create a new cvlanguage record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvlanguage
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvlanguage 
 * 
 * @apiParam {varchar}     name          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguage/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvlanguage/:id Update the cvlanguage data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvlanguage
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvlanguage 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguage/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvlanguage/:id  Delete data of a cvlanguage by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvlanguage
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvlanguage
 *
 * @apiParam {Number} id The cvlanguage-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvlanguage/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

