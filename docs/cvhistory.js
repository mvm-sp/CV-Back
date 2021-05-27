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
 * @api {get} /cvhistory/ Read all data of a cvhistory
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvhistory
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvhistory data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistory/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     role          Description
 * @apiSuccess {varchar}     company          Description
 * @apiSuccess {bpchar}     periodbegin          Description
 * @apiSuccess {bpchar}     periodend          Description
 * @apiSuccess {text}     description          Description
 * @apiSuccess {varchar}     notes          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idlanguage": "", 
 *       "role": "", 
 *       "company": "", 
 *       "periodbegin": "", 
 *       "periodend": "", 
 *       "description": "", 
 *       "notes": "", 
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
 * @api {get} /cvhistory/:id Read data of a cvhistory by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvhistory data
 *
 * @apiParam {String} id The cvhistory-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistory/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     role          Description
 * @apiSuccess {varchar}     company          Description
 * @apiSuccess {bpchar}     periodbegin          Description
 * @apiSuccess {bpchar}     periodend          Description
 * @apiSuccess {text}     description          Description
 * @apiSuccess {varchar}     notes          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idlanguage": "", 
 *       "role": "", 
 *       "company": "", 
 *       "periodbegin": "", 
 *       "periodend": "", 
 *       "description": "", 
 *       "notes": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /cvhistory/ Search data of a cvhistory by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvhistory
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvhistory data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistorysearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {int4}     idlanguage          Description
 * @apiSuccess {varchar}     role          Description
 * @apiSuccess {varchar}     company          Description
 * @apiSuccess {bpchar}     periodbegin          Description
 * @apiSuccess {bpchar}     periodend          Description
 * @apiSuccess {text}     description          Description
 * @apiSuccess {varchar}     notes          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "idowner": "", 
 *       "idlanguage": "", 
 *       "role": "", 
 *       "company": "", 
 *       "periodbegin": "", 
 *       "periodend": "", 
 *       "description": "", 
 *       "notes": "", 
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
 * @api {post} /cvhistory Create a new cvhistory record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvhistory
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvhistory 
 * 
 * @apiParam {int4}     idowner          Description
 * @apiParam {int4}     idlanguage          Description
 * @apiParam {varchar}     role          Description
 * @apiParam {varchar}     company          Description
 * @apiParam {bpchar}     periodbegin          Description
 * @apiParam {bpchar}     periodend          Description
 * @apiParam {text}     description          Description
 * @apiParam {varchar}     notes          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistory/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvhistory/:id Update the cvhistory data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvhistory
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvhistory 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistory/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvhistory/:id  Delete data of a cvhistory by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvhistory
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvhistory
 *
 * @apiParam {Number} id The cvhistory-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvhistory/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

