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
 * @api {get} /logapi/ Read all data of a logapi
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup logapi
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads logapi data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapi/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsurl          Description
 * @apiSuccess {varchar}     dsrequest          Description
 * @apiSuccess {varchar}     dsresponse          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {timestamptz}     dtlog          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsurl": "", 
 *       "dsrequest": "", 
 *       "dsresponse": "", 
 *       "dsemailuser": "", 
 *       "dtlog": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function getAll() { return; }

/**
 * @api {get} /logapi/:id Read data of a logapi by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads logapi data
 *
 * @apiParam {String} id The logapi-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapi/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsurl          Description
 * @apiSuccess {varchar}     dsrequest          Description
 * @apiSuccess {varchar}     dsresponse          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {timestamptz}     dtlog          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsurl": "", 
 *       "dsrequest": "", 
 *       "dsresponse": "", 
 *       "dsemailuser": "", 
 *       "dtlog": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /logapi/ Search data of a logapi by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup logapi
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads logapi data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapisearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsurl          Description
 * @apiSuccess {varchar}     dsrequest          Description
 * @apiSuccess {varchar}     dsresponse          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {timestamptz}     dtlog          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsurl": "", 
 *       "dsrequest": "", 
 *       "dsresponse": "", 
 *       "dsemailuser": "", 
 *       "dtlog": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function search() { return; }

/**
 * @api {post} /logapi Create a new logapi record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup logapi
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the logapi 
 * 
 * @apiParam {varchar}     dsurl          Description
 * @apiParam {varchar}     dsrequest          Description
 * @apiParam {varchar}     dsresponse          Description
 * @apiParam {varchar}     dsemailuser          Description
 * @apiParam {timestamptz}     dtlog          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapi/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /logapi/:id Update the logapi data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup logapi
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the logapi 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapi/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /logapi/:id  Delete data of a logapi by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup logapi
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from logapi
 *
 * @apiParam {Number} id The logapi-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/logapi/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

