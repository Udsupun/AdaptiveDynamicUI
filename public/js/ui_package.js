var express=require('express');
var app=express();

/*
exports.Embeded_Neo4j_Database= function(host) { 
    var neo4j = require('node-neo4j');
	db =  new neo4j(host);
    
    function create_User_Node(unique_user_id){
    	db.cypherQuery('CREATE (User:Site_User{ id: {id}) RETURN User'
	      ,

	      {
	        id: unique_user_id,
	            
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
}
*/

/*
exports.Maths=function (num1,num2) {
  // always initialize all instance properties
  this.number1 = num1;
  this.number2 = num2; // default value
  this.sum=function(){
  	console.log(this.number1+this.number2);
  }
};
// class methods


*/
function Vehicle(eng_num,cha_num){
	this.engine_number=eng_num;
	this.chassy_number=cha_num;

}

Vehicle.prototype.acceleration=function(){
	console.log('acceleration!');
}

module.exports=Vehicle;
