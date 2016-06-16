/*
function myOwn(){
	
	//Require the Neo4J module
	var neo4j = require('neo4j');
	//Create a db object. We will using this object to work on the DB.
	db = new neo4j('http://localhost:7474');

	//Let’s create a node
	db.insertNode({
	  name: 'Ghuffran',
	  company: 'Modulus',
	  age: ~~(Math.random() * 100)
	}, function (err, node) {
	  if (err) {
	    return console.log(err);
	  }

	  // Output node data.
	  console.log(node);
	});

}
*/
exports.hello = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end( service.hello() );
}
/*
function myOwn(){
	console.log('Hello');

}
*/
