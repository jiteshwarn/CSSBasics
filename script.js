
(function(){


var app = angular.module('myApp', []);

    
    app.directive("jiteshPageDirective",function(){
     return{
      replace:true,
      template:"<div><h1>JiteshPage</h1></div>",


     }


    });

	app.controller('myCtrl',['$scope', function($scope) {

    $scope.testing = false;	
    $scope.disable=  true;
    $scope.success = false;
	$scope.error   = false;

	$scope.defaultData 	= {
		email 		: 'meenaparkar@cognizant.com',
		password 	: 'password' 
			};


    $scope.validateForm=function(){
    $scope.disable=  false;
    $scope.testing = true;
    
    $scope.dataValidation=function(){

    // if($scope.user.email === $scope.defaultData.email &&
				// $scope.user.password === $scope.defaultData.password){
				// 	$scope.success = true;
				// 	$scope.error = false; 
				// }else{
				// 	$scope.success = false;     
				// 	$scope.error = true; 
				// }


      if($scope.user.email==="jiteshwar.n@gmail.com" &&
         $scope.user.password==="password"){

      	$scope.success=true;
        $scope.error=false;
      }else if($scope.user.email==="meenaparkar@gmail.com" &&
         $scope.user.password==="password"){

      $scope.success=true;
       $scope.error=false;
      }else{
       $scope.success = false;     
       $scope.error = true; 

      }


			}
		}



    }
		
]);

})();