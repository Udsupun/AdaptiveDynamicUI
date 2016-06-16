
var express=require('express');
//var ui_package = require('./public/js/ui_package.js');
var router = express.Router();

var graphdb = require('./library/_graphDB');
var app=express();
/*
var neo4j = require('node-neo4j');
db =  new neo4j('http://neo4j:n@localhost:7474');

function createSiteUser(id,first_name,last_name,email){
    db.cypherQuery('CREATE (User:SiteUser{ id: {id},first_name: {firstname}, last_name: {lastname}, email: {email} }) RETURN User'
      ,

      {
        id: id,
        firstname: first_name,
        lastname: last_name,
        email: email //generate random age
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            console.log(result.data); // delivers an array of query results
            console.log(result.columns); // delivers an array of names of objects getting returned
      }
    );
}

function create_UI_component(id,name){
    db.cypherQuery('CREATE (Ui:UI_Component{ id: {id},name: {name} }) RETURN Ui'
      ,

      {
        id: id,
        name: name     
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            console.log(result.data); // delivers an array of query results
            console.log(result.columns); // delivers an array of names of objects getting returned
      }
    );

}

function delete_UI_Component(ui_id){
    db.cypherQuery('MATCH (UI:UI_Component) WHERE UI.id={id}  DELETE UI'
      ,
      {
        id: ui_id       
      } 
      ,
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            console.log(result.data); // delivers an array of query results
            //console.log(result.data.length);
            //console.log(result.columns); // delivers an array of names of objects getting returned
      }
    );
}

function select_UI_Component(ui_id){
    
    db.cypherQuery('MATCH (Ui:UI_Component{ id: {id} }) RETURN Ui'
      ,
      {
        id: ui_id       
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            console.log(result.data); // delivers an array of query results
            console.log(result.data.length);
            console.log(result.columns); // delivers an array of names of objects getting returned
      }
    );
}

function Create_Relationship_Between_User_And_UiComponent(user_id,ui_id){
    
    db.cypherQuery('MATCH (Ui:UI_Component{ id: {uid} }) , (User:SiteUser{ id: {usr_id} }) CREATE  User-[r:Uses{time:0}]->Ui '
      ,
      {
        uid: ui_id ,
        usr_id:user_id
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
      }
    );
}

function Return_Relationship_time_property_Between_User_And_UiComponent(user_id,ui_id){
    
    db.cypherQuery('MATCH  (User:SiteUser{ id: {usr_id} }) -[r:Uses]->(Ui:UI_Component{ id: {uid} }) RETURN r.time'
      ,
      {
        uid: ui_id ,
        usr_id:user_id
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            var time=result.data[0];
            return time;
      }
    );
}

function Update_Relationship_time_property_Between_User_And_UiComponent(user_id,ui_id,time){
    
    db.cypherQuery('MATCH  (User:SiteUser{ id: {usr_id} }) -[r:Uses]->(Ui:UI_Component{ id: {uid} }) SET r.time=r.time+{time}'
      ,
      {
        uid: ui_id ,
        usr_id:user_id,
        time:time
      }
      , 
      function (err, result) {
            if (err) {
              return console.log(err);
            }
            
            console.log("wada");
      }
    );
    
}
*/


var DB= new graphdb('http://neo4j:0717021924udmax@localhost:7474');
DB.func();
//DB.create_User_Node('e@gmail.coml
//DB.Register_Site_User('l@gmail.com');
//DB.create_User_Node_and_Connect_to_all_uiComponents(400);

var path = __dirname;
app.use(express.static(__dirname + '/library'));
app.use("/",router);

router.get("/",function(req,res){
  res.sendFile(path+"/hel.html");
});

/*
router.post('/ui_submission', function (req, res) {
  //console.log(JSON.stringify(rs));
  console.log(req);
});
*/

router.get('/ui_submission', function(req, res, next) {
    add_UI_components_to_graphDB(req.query.child_ids,req.query.parent_ID);
    
});

function add_UI_components_to_graphDB(id_list,parent_id){
  for(i=0;i<id_list.length;i++){
    DB.create_UI_component(id_list[i],parent_id);
  }
}

app.listen(8083);