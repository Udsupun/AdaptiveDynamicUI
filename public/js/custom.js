function view_Home_Page() {
    document.getElementById( 'Home' ).scrollIntoView();
   
};

function view_Components_Page() {
    document.getElementById( 'Component' ).scrollIntoView();
    
};

function view_Getting_Start_Page() {
    document.getElementById( 'Getting_Start' ).scrollIntoView();
    
};

function test(){
	$("#login").click(function(){
		$("#register_form").hide();
		$("#login_form").show();
		$("#login_link").hide();

		$("#login_warning").show();
		$("#register_warning").hide();


	});
}

exports.s=function(){
	console.log("kkk");
	
	
};

function view_userAccount(first_name,last_name){
	$("#greeting").empty().text("Welcome "+first_name+" "+last_name);
	$("#fullname").empty().text(first_name+" "+last_name);
	$("#login_form").hide();
	$("#user_Account").show();
					
	$("#login_warning").hide();
	$("#user_warning").show();
}

function register_btn_click_event(){
	$('#register_btn').click(function(){
		if ($('#rfirstname').val() != "" && $('#rlastname').val() != "" &&  $('#remail').val() != "" && $('#rpassword').val() != "") {
		    var data = {"rfirstname":$('#rfirstname').val(),"rlastname":$('#rlastname').val(),"remail":$('#remail').val(), "rpassword": $('#rpassword').val()}
        	
	        //$("#status").empty().text("File is uploading...");
	        $.ajax({
	                type: "POST",
	                url:"/Registration_process_post",
	                data:data,

	                success: function(response) {
	                	$("#status").show();
	                	if(response.length==1){
	        				$("#rpassword").val('');
	                		//$("#status").empty().text("username or password is incorrect!!!");
	                		alert("registrtion not successs!!");
	                	}
	                	else{
	                		$("#rfirstname").val('');
	                		$("#rlastname").val('');
		                	$("#remail").val('');
	        				$("#rpassword").val('');

	        				alert("registrtion successs");

		        			//$("#status").empty().text("login success....");
		        			var developer = JSON.parse(response);
		        			
		        			view_userAccount(developer[0].first_name,developer[0].last_name);
	        			}
	        				        			
	            	},
	            	
	                error: function(textstatus, errorThrown) {
	                    alert('text status ' + textstatus + ', err ' + errorThrown);
	                }
	        });

	        return false;
		}
		else{
			
		}		
	})
}


function login_btn_click_event(){
	$('#login_btn').click(function(){
		if ($('#email').val() != "" && $('#password').val() != "") {
		    var data = {"email":$('#email').val(), "password": $('#password').val()}
        
	        $("#status").empty().text("File is uploading...");
	        $.ajax({
	                type: "POST",
	                url:"/login_process_post",
	                data:data,

	                success: function(response) {
	                	$("#status").show();
	                	if(response.length==1){
	        				$("#password").val('');
	                		$("#status").empty().text("username or password is incorrect!!!");
	                	}
	                	else{
		                	$("#email").val('');
	        				$("#password").val('');

		        			$("#status").empty().text("login success....");
		        			var developer = JSON.parse(response);
		        			
		        			view_userAccount(developer[0].first_name,developer[0].last_name);
	        			}
	        				        			
	            	},
	            	
	                error: function(textstatus, errorThrown) {
	                    alert('text status ' + textstatus + ', err ' + errorThrown);
	                }
	        });

	        return false;
		}
		else{
			
		}		
	})
}

function cancel_btn_click_event(){
	$("#cancel_login").click(function(){
		$("#register_form").show();
		$("#login_form").hide();
		$("#login_link").show();
		$("#login_warning").hide();
		$("#register_warning").show();

		$("#email").val('');
	    $("#password").val('');

	    $("#status").hide();
		return false;
	});						
}

function login_link_click_event(){
	$("#login").click(function(){
		$("#register_form").hide();
		$("#login_form").show();
		$("#login_link").hide();

		$("#login_warning").show();
		$("#register_warning").hide();

	});					
}

