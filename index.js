const express = require('express');
const path = require('path');
const { Client } = require('pg')
const replaceall = require("replaceall");
const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'local',
  password: 'postgres',
  port: 5432,
});
client.connect();
var fs = require('fs');
const procedures= fs.readFileSync('./templates/procedures.tmp', 'utf8');
const parameters= fs.readFileSync('./templates/parameter.tmp', 'utf8');
const txtroutes= fs.readFileSync('./templates/routes.tmp', 'utf8');
const txtControllers= fs.readFileSync('./templates/controller.tmp', 'utf8');
const txtDocs= fs.readFileSync('./templates/doc.tmp', 'utf8');
const txtAppjs= fs.readFileSync('./templates/app.js.tmp', 'utf8');

//postgres://postgres:TjYz3m@201.20.7.33:5890/nestbidb
//'select * from prDbPersonalSchema();'
  
var words = [
  '{TableName}',
  '{SQLReturnGet}', 
  '{SQLFields}',
  '{SQLParamPost}',
  '{SQLFieldInsert}',
  '{SQLParamInsert}',
  '{SQLParamPut}',
  '{SQLFieldUpdate}',
  '{ParamADD}',
  '{ParamUpdate}',
  '{ParamQtPost}',
  '{ParamQtPut}',
  '{DOCJASONRespGet}',
  '{DOCParamRespGet}',
  '{DOCParamReqPost}',
  '{DOCParamReqPut}',
  '{ParamAPPjsRequire}',
  '{ParamAPPjsUse}'

];

var contents =  [
  '{TableName}',
  '{SQLReturnGet}', 
  '{SQLFields}',
  '{SQLParamPost}',
  '{SQLFieldInsert}',
  '{SQLParamInsert}',
  '{SQLParamPut}',
  '{SQLFieldUpdate}',
  '{ParamADD}',
  '{ParamUpdate}',
  '{ParamQtPost}',
  '{ParamQtPut}',
  '{DOCJASONRespGet}',
  '{DOCParamRespGet}',
  '{DOCParamReqPost}',
  '{DOCParamReqPut}',
  '',
  ''
];
/*
 '{ParamAPPjsRequire}'
var companysize = require('./routes/companysize');
var login = require('./routes/login');
var accgroup = require('./routes/accgroup');
var users = require('./routes/users');

'{ParamAPPjsUse}'
app.use('/', companysize);
app.use('/', login);
app.use('/', accgroup);
app.use('/', users);

*/
var curTable = '';
var maxColl = 1;

  client.query('select * from prDbPersonalSchema()')
  .then(res => {
    clearContents();
    if(res.rows.length > 0) curTable = res.rows[0].tabela;
    for (var row=0;row<res.rows.length ;row++) {
      //console.log(contents[1],curTable);
      if( res.rows[row].tabela != curTable){
        contents[16] = contents[16] + 'var ' + curTable + '  = require(\'./routes/' + curTable + '\');' +  '\r\n'; 
        contents[17] = contents[17] + 'app.use(\'/\','   + curTable + ');' +  '\r\n'; 
        finalizeTemplates();
        clearContents()
        curTable = res.rows[row].tabela;
      }
      maxColl = res.rows[row].posicao;
      contents[0] = curTable + ', ';
      contents[1] = contents[1] + res.rows[row].coluna + ' ' +  res.rows[row].tipo + ', ';
      contents[2] = contents[2] +res.rows[row].coluna + ', ';
      if(res.rows[row].coluna != 'id'){
        if( res.rows[row].coluna != 'createdat' && res.rows[row].coluna != 'updatedat' ){
          if(res.rows[row].coluna != 'active'){
            contents[3] = contents[3] + 'p' + res.rows[row].coluna + ' ' +  res.rows[row].tipo + ', ';
            contents[8] = contents[8] + res.rows[row].coluna +  ': req.body.' + res.rows[row].coluna + ', ';
            contents[4] = contents[4] + res.rows[row].coluna + ', '; 
            contents[5] = 'p' + contents[5] + res.rows[row].coluna + ', ';
            contents[15] = contents[15] + ' * @apiParam {' + res.rows[row].tipo + '}     '+ res.rows[row].coluna +'          Description' +  '\r\n';  
          }
          contents[6] = contents[6] + 'p' + res.rows[row].coluna + ' ' +  res.rows[row].tipo + ', ';
          contents[7] = contents[7] + res.rows[row].coluna +  ' = p' + res.rows[row].coluna + ', ';
          contents[9] = contents[9] + res.rows[row].coluna +  ': req.body.' + res.rows[row].coluna + ', ';
          contents[14] = contents[14] + ' * @apiParam {' + res.rows[row].tipo + '}     '+ res.rows[row].coluna +'          Description' +  '\r\n';  
        }
      }
      contents[12] = contents[12] + ' *       "' + res.rows[row].coluna +  '": ""' + ', ' +  '\r\n';
      contents[13] = contents[13] + ' * @apiSuccess {' + res.rows[row].tipo + '}     '+ res.rows[row].coluna +'          Description' +  '\r\n';
      
        // {  categoria: 'table',  tabela: 'accgroup',  coluna: 'id',  tipo: 'int4',  tamanho: null,  posicao: 1 }
    }
    
    if(contents[15].length > 0){
      finalizeTemplates();
    }
    writeAppjs();
    console.log("Finished...");
  })
  .catch(e => console.error(e.stack));


function finalizeTemplates(){
          //Write Pocedures
          var distProcedures = procedures;
          var distparameters = parameters;
          var distRoutes = txtroutes;
          var distControllers = txtControllers;
          var distDocs = txtDocs;
          contents[10] = buildTextParam(maxColl-4);
          contents[11] = buildTextParam(maxColl-2);
          for (var x=0;x<=contents.length -1 ;x++) {
            var writeContent = contents[x].substr(0,contents[x].length -(x<12 ? 2: 0));
            //Just procedures words
            if(x<=7){
              distProcedures = replaceall(words[x],writeContent,distProcedures);
            }
            //Just procedures words
            if(x==0 || (x>7 && x<12)){
              distparameters = replaceall(words[x],writeContent,distparameters);
            }
            //Just document words
            if(x==0 || (x>11 && x<15)){
              distDocs = replaceall(words[x],writeContent,distDocs);
            }

            if(x==0){
              distRoutes = replaceall(words[x],writeContent,distRoutes);
              distControllers = replaceall(words[x],writeContent,distControllers);
            }
          }
          //console.log(distparameters);
          fs.writeFileSync("./dist/procedures/" + curTable +".sql", distProcedures);
          fs.writeFileSync("./dist/parameters/" + curTable +".js", distparameters);
          fs.writeFileSync("./dist/routes/" + curTable +".js", distRoutes);
          fs.writeFileSync("./dist/controllers/" + curTable +".js", distControllers);
          fs.writeFileSync("./dist/docs/" + curTable +".js", distDocs);
          console.log("Writing...", curTable);

}

function writeAppjs(){
          //Write Pocedures
          var distAppjs = txtAppjs;
          for (var x=16;x<=contents.length -1 ;x++) {
            var writeContent = contents[x].substr(0,contents[x].length -(x<12 ? 2: 0));
            //console.log(contents[15]);
            //Just appJs Words
            
            distAppjs = replaceall(words[x],writeContent,distAppjs);
            
          }
          
          fs.writeFileSync("./dist/app.js", distAppjs);
}
  function clearContents(){
    for (var x=0;x<contents.length-2 ;x++) {
      contents[x]='';
    }
  }

  function buildTextParam(num){
    var ret= '';
    for (var x=1;x<=num ;x++) {
      ret = ret + '$' + x + ', ';
    }
    return ret;
  }

  function writeFiles(table){

    var distProcedures = procedures;
    for (var x=0;x<contents.length ;x++) {
      var writeContent = contents[x].substr(0,contents[x].length -1);
      distProcedures = replaceall(words[x],writeContent,distProcedures);
    }
    //console.log( distProcedures);
    //fs.writeFileSync("./dist/procedures/" + table, distProcedures);
    clearContents()
    //contents[0] = res.rows[row].tabela;
    
  }