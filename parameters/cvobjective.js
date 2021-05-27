const express = require('express');

const querys ={
        getAll:'select * from prGetAllcvobjective()',
        getById:'select * from prGetcvobjective($1,$2)',
        add:'select prPostcvobjective($1, $2, $3)',
        update:'select prPutcvobjective($1, $2, $3, $4)',
        remove:'select prDeletecvobjective($1)',
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
    ret.data = {idowner:req.params.id,idlanguage:req.params.lang};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildAdd(req){
    ret.data = {idowner: req.body.idowner, idlanguage: req.body.idlanguage, description: req.body.description}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {idowner:req.params.id,idlanguage:req.params.lang, description: req.body.description, active: req.body.active}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildRemove(req){
    ret.data = {idowner:req.params.id,idlanguage:req.params.lang};
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