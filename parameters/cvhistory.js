const express = require('express');

const querys ={
        getAll:'select * from prGetcvhistory(null)',
        getById:'select * from prGetcvhistory($1)',
        add:'select prPostcvhistory($1, $2, $3, $4, $5, $6, $7, $8)',
        update:'select prPutcvhistory($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        remove:'select prDeletecvhistory($1)',
        log:'select * from prPostLogApi($1, $2 ,$3, $4)',
        Resume: 'select * from prGetJsonCvContent($1, $2)'
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
    ret.data = {idowner: req.body.idowner, idlanguage: req.body.idlanguage, role: req.body.role, company: req.body.company, periodbegin: req.body.periodbegin, periodend: req.body.periodend, description: req.body.description, notes: req.body.notes}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,idowner: req.body.idowner, idlanguage: req.body.idlanguage, role: req.body.role, company: req.body.company, periodbegin: req.body.periodbegin, periodend: req.body.periodend, description: req.body.description, notes: req.body.notes, active: req.body.active}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildRemove(req){
    ret.data = {id:req.params.id};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildResume(req){
    ret.data = {idowner:req.params.id,idLanguage:req.params.lang};
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
    buildLog,
    buildResume
};