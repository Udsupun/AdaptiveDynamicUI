

var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
 	
});




//////////////////////////////// Tab directive ///////////////////////////
app.directive('tab',function(){
  return {
      
      restrict: 'E',
      transclude:true,
      template: '<div role="tabpanel" ng-transclude></div>',
      require: '^tabset',
      scope:{heading: '@'},
      link:function(scope,elemt,attr,tabCtrl){
      	scope.active = false
      	tabCtrl.addTab(scope)
      	tabCtrl.addchild(attr.id);
        
        bind('click', function() {
          
          alert("frt");
        });
        
      	
      }
  }
});

app.directive('tabset', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: { },
    templateUrl: 'tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
	    var self = this;
	    self.tabs = [];
	    
	    self.JSONObj = {};
	    self.JSONObj.child_ids = [];

    self.addTab = function addTab(tab) {
		  self.tabs.push(tab)
		  if(self.tabs.length === 1) {
		    tab.active = true
		  }
		}
		self.addchild = function addchild(child) {
		  self.JSONObj.child_ids.push(child);
		  
		}
    self.handle=function handle(){

    }
		
    },
    link:function(scope,elm,attr,tabserCtrl){
    	tabserCtrl.JSONObj.parent_ID=attr.id;
      ui_data_Submission(tabserCtrl.JSONObj);
      
      
      // elm.bind('click', function() {
      //   //var src = elem.find('tab').attr('src');
      //   alert(attr.id);
      // });
      
    }
  }
})
/*
app.run(function() {
    alert("app run "+IDS.length);
});

app.config( function() {
    alert("app config "+IDS.length);
});

app.controller('MainCtrl', function($scope) {
    alert("app controller "+IDS.length);
});

*/

//////////////////////////////////////////////////////////////////////////////////////////

function ui_data_Submission(data){
    $.ajax({
        type: "GET",
        url:"/ui_submission",
        data:data,
        /*
        success: function(response) {
          alert("success");      
                                  
        },
                  
        error: function(textstatus, errorThrown) {
          alert('text status ' + textstatus + ', err ' + errorThrown);
        }
        */
    });

    return false;

}








