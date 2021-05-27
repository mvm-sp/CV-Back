const express = require('express');
const pg = require('pg');
const path = require('path');
const localAuth = require('../public/auth/local');
const params = require('../parameters/cvlanguage');
const request = require('request');
const { resolve } = require('path');
const { Pool, Client } = require('pg')


//User Authentication object
var userObj = null;
var querys = params.setQuerys();

async function getAll(req, res, next) {
  const results = [];
  userObj = localAuth.isAuthenticated(req);

  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
  const client = new Client(process.env.DATABASE_URL)
  try {
    await client.connect()
    // SQL Query > Select Data
    const queryResult = await client.query(querys.getAll);
    const { rows } = queryResult
    return res.json({ payload: rows });

  } catch (error) {
    res.status(500).json({
      status: 'internalServerError',
      message: error
    });
    console.log(error)
  } finally {
    await client.end()
  }

}

async function getById(req, res, next) {
  const results = [];
  userObj = localAuth.isAuthenticated(req);

  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
  const client = new Client(process.env.DATABASE_URL)
  try {
    await client.connect()
    // SQL Query > Select Data
    const queryResult = await client.query(querys.getById,params.buildGetById(req).params);
    const { rows } = queryResult
    return res.json({ payload: rows });

  } catch (error) {
    res.status(500).json({
      status: 'internalServerError',
      message: error
    });
    
  } finally {
    await client.end()
  }

}

async function add(req, res, next) {
  const results = [];

  // Grab data from http request
  userObj = localAuth.isAuthenticated(req);
  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });    
  }
  else 
  {
    //Build parameter object data
    const objParam = params.buildAdd(req);
    const client = new Client(process.env.DATABASE_URL)

    try {
      
      await client.connect()

      await client.query(querys.add, objParam.params)
      // // SQL Query > log 
      const queryResult = await client.query(querys.log, params.buildLog(req, userObj.user).params);
      const { rows } = queryResult
      return res.json({ payload: !!rows.length });

    } catch (error) {
      res.status(500).json({ success: false, data: error });
      console.log(error)
    }
     finally {
      await client.end();
    }
  }
}

async function update(req, res, next) {
  const results = [];

  userObj = localAuth.isAuthenticated(req);

  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  } else {

    const objParam = params.buildUpdate(req);
    const client = new Client(process.env.DATABASE_URL)
    
    try {
      
      await client.connect()
      await client.query(querys.update, objParam.params)
      // // SQL Query > log 
      const queryResult = await client.query(querys.log, params.buildLog(req, userObj.user).params);
      const { rows } = queryResult
      return res.json({ payload: !!rows.length });

    } catch (error) {
      res.status(500).json({ success: false, data: error });
      console.log(error)
    }
     finally {
      await client.end();
    }

  }
}

async function remove(req, res, next) {
  const results = [];
  // Grab data from the URL parameters
  userObj = localAuth.isAuthenticated(req);

  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  } else {

    const objParam = params.buildRemove(req);
    const client = new Client(process.env.DATABASE_URL)
    
    try {
      
      await client.connect()
      await client.query(querys.remove, objParam.params);
      // // SQL Query > log 
      const queryResult = await client.query(querys.log, params.buildLog(req, userObj.user).params);
      const { rows } = queryResult
      return res.json({ payload: !!rows.length });

    } catch (error) {
      res.status(500).json({ success: false, data: error });
      console.log(error)
    }
     finally {
      await client.end();
    }

  }
}

async function search(req, res, next) {
  const results = [];
  userObj = localAuth.isAuthenticated(req);

  if (userObj.status !== 0) {
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
  const client = new Client(process.env.DATABASE_URL)
  try {
    await client.connect()
    // SQL Query > Select Data
    const queryResult = await client.query(querys.getAll);
    const { rows } = queryResult
    searchResults(req, res, rows);

  } catch (error) {
    res.status(500).json({
      status: 'internalServerError',
      message: error
    });
    console.log(error)
  } finally {
    await client.end()
  }

};

function searchResults(req, res, result) {

  const queryParams = req.query;

  //Requerid {Some required filter} Field
  //const {filter variable name} = queryParams.{querystring param name}

  //Optional filter, order, paginator fields 
  const filter = queryParams.filter || '',
    sortField = queryParams.sortField,
    sortOrder = queryParams.sortOrder,
    pageNumber = parseInt(queryParams.pageNumber) || 0,
    pageSize = parseInt(queryParams.pageSize);

  //Sort direction indicator
  const direction = (sortOrder === 'asc') ? 1 : -1;;

  //Filter by required {Some required filter}  field
  //let colResult = Object.values(result).filter(objResult => objResult.{result field name} == {filter variable name});

  //if there's no Filter by required field, then simply initialize colResult
  let colResult = Object.values(result)


  //Choose field ordinator
  if (sortField) {
    colResult.sort((l1, l2) => ((l1[sortField] < l2[sortField] ? -1 : 1) * direction));
  }

  //Filter results by filter field parameter
  if (filter) {
    colResult = colResult.filter(objResult => Object.values(objResult).join().trim().toLowerCase().search(filter.toLowerCase()) >= 0);
  }

  //Calculates initial position item by page
  const initialPos = (pageNumber - 1) * pageSize;

  //Cut results to page size
  const resultsPage = colResult.slice(initialPos, initialPos + pageSize);
  //const resultsPage = colResult.slice(0, 10);

  //Returns data as Payload(result), found(how many itens were found) and total (How many itens exists)
  setTimeout(() => {
    res.status(200).json({ payload: resultsPage, found: resultsPage.length, total: result.length });
  }, 1000);
}


module.exports = {
  getAll,
  getById,
  update,
  add,
  remove,
  search
};