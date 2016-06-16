///////////////////   Bckend Neo4j graph databse  //////////////////////////////////

function Embeded_Neo4j_Database(host) { 
    var neo4j = require('node-neo4j');
	db =  new neo4j(host);    
}

Embeded_Neo4j_Database.prototype.func = function(){
	console.log('hello');
}

Embeded_Neo4j_Database.prototype.create_User_Node_and_Connect_to_all_uiComponents = function(unique_user_id){
    
    	db.cypherQuery('CREATE (User:Site_User{ id: {id}}) WITH User MATCH (uis:UI_Component) CREATE User-[r:Used{time:0}]->uis'
	      ,

	      {
	        id: unique_user_id
	            
	      }
	      , 
	      function (err, result) {
	            if (err) {
	              return console.log(err);
	            }
	            console.log('created User'); // delivers an array of query results
	            //console.log(result.columns); // delivers an array of names of objects getting returned
	      }
	    );
 
}


Embeded_Neo4j_Database.prototype.link_all_uicomponent_to_User_Node = function(user_ID){
    
    	db.cypherQuery('MATCH (uis:UI_Component) , (User:Site_User{ id:{id}}) CREATE  User-[r:Use{time:0}]->uis'
	      ,

	      {
	        id: user_ID
	            
	      }
	      , 
	      function (err, result) {
	            if (err) {
	              return console.log(err);
	            }
	            //console.log(result.data); // delivers an array of query results
	            console.log('linked'); // delivers an array of names of objects getting returned
	      }
	    );
}


Embeded_Neo4j_Database.prototype.create_UI_component = function (ui_id,parent_ui_id){
    db.cypherQuery('CREATE (Ui:UI_Componentss{ id: {id},name:{name},parent_ui_id: {parent_ui_id} }) RETURN Ui'
      ,

      {
        id: ui_id,
        name:ui_id,
        parent_ui_id: parent_ui_id     
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

module.exports=Embeded_Neo4j_Database;
