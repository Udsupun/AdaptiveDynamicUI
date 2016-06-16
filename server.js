
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var bodyParser = require('body-parser');
//app.use(bodyParser.json());
var mysql=require('mysql');
var ui_package = require('./public/js/ui_package');


var connection=mysql.createPool({
  connectionLimit:50,
  host:'localhost',
  user:'root',
  password:'',
  database:'sitedb'
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use(express.static(__dirname + '/public'));
/*
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
*/
//////////////////////////////database connections/////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////

router.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.send(JSON.stringify(response));
})

router.post('/process_post', function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.send(JSON.stringify(response));
});



// user registration handle //

router.post('/Registration_process_post',urlencodedParser,function (req, res) {
   var result="";
   connection.getConnection(function(error,tempConnection){
    if(!!error){
      tempConnection.release();
      console.log('Error');
    }else{
      console.log('Connected');
      var user = { first_name: req.body.rfirstname, last_name: req.body.rlastname,email:req.body.remail,password:req.body.rpassword };

///////////////////////////////////////////////////////////////////////////////////////////////////////////
      //var neo4j_Instanse=new ui_package.Embeded_Neo4j_Database('http://neo4j:n@localhost:7474');
      //neo4j_Instanse.create_User_Node(eq.body.remail);

      ui_package.maths(2,3).sum();
      

///////////////////////////////////////////////////////////////////////////////////////////////////////////

      tempConnection.query("INSERT INTO developer SET?",user,function(error,rows,fields){
      if(!!error){
        console.log('Error!');
      }else{
      	if(rows.length==0){
      		result="register une naa";
      		res.end("0");

      	}
        else{
        	result="register una";
        	res.end(JSON.stringify(rows));
        	
        }
        console.log(result);
        
      }
    });
    }
  });
	
});

// user login handle  //
router.post('/login_process_post',urlencodedParser,function (req, res) {
   var result="";
   connection.getConnection(function(error,tempConnection){
    if(!!error){
      tempConnection.release();
      console.log('Error');
    }else{
      console.log('Connected');
      tempConnection.query("SELECT * FROM developer WHERE email=? AND password=?",[req.body.email,req.body.password],function(error,rows,fields){
      if(!!error){
        console.log('Error!');
      }else{
      	if(rows.length==0){
      		result="log wenna baa";
      		res.end("0");

      	}
        else{
        	result="log una";
        	res.end(JSON.stringify(rows));
        	
        }
        console.log(result);
        
      }
    });
    }
  });
	
});
///////////////////////////////////////////////////////////////////////////////////////
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s : %s", host, port)

})


