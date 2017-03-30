var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http){

var refresh = function(){


	$http.get('/weather').then(function(response){
		console.log(response.data);

		$scope.twit = response.data;
	});
};
	refresh();


	$scope.subsearch = function(){

		console.log($scope.search);

		$http.post('/weather',$scope.search).then(function(response){
			$scope.twit = response.data;
			
		});
	};
});


