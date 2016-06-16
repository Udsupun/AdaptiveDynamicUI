/*
var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/hel.html',function(req,res){
	res.sendFile(__dirname+"/hel.html");
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
*/
var express=require('express');
var mysql=require('mysql');
var app=express();

var connection=mysql.createPool({
  connectionLimit:50,
  host:'localhost',
  user:'root',
  password:'',
  database:'sitedb'
});


app.get('/',function(req,res){
  connection.getConnection(function(error,tempConnection){
    if(!!error){
      tempConnection.release();
      console.log('Error');
    }else{
      console.log('Connected');
      tempConnection.query("SELECT * FROM developer",function(error,rows,fields){
      if(!!error){
        console.log('Error!');
      }else{
        console.log('wada');
        console.log(rows);
        res.send('hello  '+rows[0].first_name+' '+rows[0].last_name);
      }
    });
    }
  });
});


app.get('/',function(req,res){
  connection.query("SELECT * FROM employee",function(error,rows,fields){
    if(!!error){
      console.log('Error!');
    }else{
      console.log('wada');
      console.log(rows);
      res.send('hello  '+rows[0].first_name+' '+rows[0].last_name);
    }
  });
})

app.listen(8181);











