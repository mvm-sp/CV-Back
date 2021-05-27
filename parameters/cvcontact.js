const express = require('express');

const querys ={
        getAll:'select * from prGetcvcontact(null)',
        getById:'select * from prGetcvcontact($1)',
        add:'select prPostcvcontact($1, $2, $3, $4, $5, $6, $7, $8)',
        update:'select prPutcvcontact($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        remove:'select prDeletecvcontact($1)',
        log:'select * from prPostLogApi($1, $2 ,$3, $4)'
    };


const ret =  {  data : {},
                params:{}
             };

function setQuerys(){
    return querys;
}

function buildGetAll(req){
    return ret;
}

function buildGetById(req){
    ret.data = {id:req.params.id};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildAdd(req){
    ret.data = {idowner: req.body.idowner, address: req.body.address, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode, email: req.body.email, phone: req.body.phone, urllinkedin: req.body.urllinkedin, urlgithub: req.body.urlgithub}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,idowner: req.body.idowner, address: req.body.address, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode, email: req.body.email, phone: req.body.phone, urllinkedin: req.body.urllinkedin, urlgithub: req.body.urlgithub, active: req.body.active}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildRemove(req){
    ret.data = {id:req.params.id};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildLog(req, userId){
    ret.data = {apiAddress: req.method + req.url , 
                request: req.body ,
                response: 'response successfully sent', 
                user: userId};
    ret.params = objToArray(ret.data);
    return ret;
}

function objToArray(obj){
    var result = [];
    for (var key in obj) {
       if (obj.hasOwnProperty(key)) {
           result.push(obj[key]);
       }
    }
    return result;
}
module.exports = {
    setQuerys,
    buildGetAll,
    buildGetById,
    buildAdd,
    buildUpdate,
    buildRemove,
    buildLog
};