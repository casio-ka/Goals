var app = angular.module("myModule", [])
		.controller("myController" , function($scope){
									
	var members =[
		{name: "John Smith", Votes: 0},
		{name: "Claire Temple", Votes: 0},
	];					

	$scope.members = members;
	
	$scope.incrementUp = function(member){
		member.Votes++;
	}
	$scope.incrementDown = function(member){
		member.Votes--;
	}
});	