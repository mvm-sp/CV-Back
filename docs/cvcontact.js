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
 * @api {get} /cvcontact/ Read all data of a cvcontact
 * @apiVersion 1.0.0 
 * @apiName getAll
 * @apiGroup cvcontact
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvcontact data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontact/
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {varchar}     address          Description
 * @apiSuccess {varchar}     city          Description
 * @apiSuccess {bpchar}     state          Description
 * @apiSuccess {varchar}     zipcode          Description
 * @apiSuccess {varchar}     email          Description
 * @apiSuccess {varchar}     phone          Description
 * @apiSuccess {varchar}     urllinkedin          Description
 * @apiSuccess {varchar}     urlgithub          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "address": "", 
 *       "city": "", 
 *       "state": "", 
 *       "zipcode": "", 
 *       "email": "", 
 *       "phone": "", 
 *       "urllinkedin": "", 
 *       "urlgithub": "", 
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
 * @api {get} /cvcontact/:id Read data of a cvcontact by id
 * @apiVersion 1.0.0 
     
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvcontact data
 *
 * @apiParam {String} id The cvcontact-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontact/4711
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {varchar}     address          Description
 * @apiSuccess {varchar}     city          Description
 * @apiSuccess {bpchar}     state          Description
 * @apiSuccess {varchar}     zipcode          Description
 * @apiSuccess {varchar}     email          Description
 * @apiSuccess {varchar}     phone          Description
 * @apiSuccess {varchar}     urllinkedin          Description
 * @apiSuccess {varchar}     urlgithub          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "address": "", 
 *       "city": "", 
 *       "state": "", 
 *       "zipcode": "", 
 *       "email": "", 
 *       "phone": "", 
 *       "urllinkedin": "", 
 *       "urlgithub": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /cvcontact/ Search data of a cvcontact by passed parameters
 * @apiVersion 1.0.0 
 * @apiName search
 * @apiGroup cvcontact
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads cvcontact data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontactsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     idowner          Description
 * @apiSuccess {varchar}     address          Description
 * @apiSuccess {varchar}     city          Description
 * @apiSuccess {bpchar}     state          Description
 * @apiSuccess {varchar}     zipcode          Description
 * @apiSuccess {varchar}     email          Description
 * @apiSuccess {varchar}     phone          Description
 * @apiSuccess {varchar}     urllinkedin          Description
 * @apiSuccess {varchar}     urlgithub          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idowner": "", 
 *       "address": "", 
 *       "city": "", 
 *       "state": "", 
 *       "zipcode": "", 
 *       "email": "", 
 *       "phone": "", 
 *       "urllinkedin": "", 
 *       "urlgithub": "", 
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
 * @api {post} /cvcontact Create a new cvcontact record
 * @apiVersion 1.0.0 
 * @apiName add
 * @apiGroup cvcontact
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the cvcontact 
 * 
 * @apiParam {int4}     idowner          Description
 * @apiParam {varchar}     address          Description
 * @apiParam {varchar}     city          Description
 * @apiParam {bpchar}     state          Description
 * @apiParam {varchar}     zipcode          Description
 * @apiParam {varchar}     email          Description
 * @apiParam {varchar}     phone          Description
 * @apiParam {varchar}     urllinkedin          Description
 * @apiParam {varchar}     urlgithub          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontact/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /cvcontact/:id Update the cvcontact data by Id
 * @apiVersion 1.0.0 
 * @apiName update
 * @apiGroup cvcontact
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the cvcontact 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontact/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /cvcontact/:id  Delete data of a cvcontact by ID
 * @apiVersion 1.0.0 
 * @apiName remove
 * @apiGroup cvcontact
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from cvcontact
 *
 * @apiParam {Number} id The cvcontact-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/cvcontact/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

