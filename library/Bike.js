angular.module('myApp', [])
	   .controller('myController', function($scope) {
	   		//get_Bike_Details();
		    $scope.Bike = [
		        {bikeName:'kdx220',CompanyName:'KAWASAKI',engineCapacity:'220'},
		        {bikeName:'CBR250',CompanyName:'HONDA',engineCapacity:'250'},
		        {bikeName:'TW',CompanyName:'YAMAHA',engineCapacity:'200'}
		    ];
		});
	   .derective('helloWorld',function(){
	   		return{
	   			replace:true,
	   			restrict:'AE',
	   			template:'<h2 style="color:white">Hello</h2>'
	   		}
	   });




function get_Bike_Details(){
	alert("hey");
}