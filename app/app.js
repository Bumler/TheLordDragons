var lordDragonApp = angular.module('lordDragonApp', [])

// LordDragonApp.config(function(){
// 	//anything that needs to happen before the app runs
// });

// LordDragonApp.run(function(){
// 	//fires at run-time
// });

.controller('lordDragonController', ['$scope','$interval', function($scope, $interval){

	$scope.hover = false;

	$scope.selectDragon = function(dragon){
		$scope.selectedDragon.selected = true;
		$scope.selectedDragon.name = dragon.name;
		$scope.selectedDragon.title = dragon.title;
		$scope.selectedDragon.icon = dragon.icon;
		$scope.selectedDragon.splash = dragon.splash;
	}

	$scope.selectedDragon = {}

	$scope.dragons = [
			{
				name: "Lord Space Dragon",
				icon: "../img/LSD_ico.jpg",
				splash: "../img/LordSpaceDragon.jpg",
				splashPosition: "center center"
			},
			{
				name: "Lord Dark Dragon",
				title: "Team Captain",
				icon: "../img/LDD_ico.jpg",
				splash: "../img/LordDarkDragon.jpg",
				splashPosition: "center center"
			},
			{
				name: "Lord Alchemist Dragon",
				title: "The Demolisher",
				icon: "../img/LAD_ico.jpg",
				splash: "../img/LordAlchemistDragon.jpg",
				splashPosition: "center 7%"
			},
			{
				name: "Lord Frost Dragon",
				icon: "../img/LFD_ico.jpg",
				splash: "../img/LordFrostDragon.jpg",
				splashPosition: "center 15%"
			}
		];

	$scope.splashDragon = {	}

	var splashPicker = $interval(function() {
		var num = Math.floor((Math.random() * $scope.dragons.length) + 0);
		$scope.selectSplash($scope.dragons[num]);
	}, 10000)

	$scope.selectSplash = function(dragon){
		$scope.splashDragon.name = dragon.name;
		$scope.splashDragon.icon = dragon.icon;
		$scope.splashDragon.splash = dragon.splash;
		$scope.splashDragon.splashPosition = dragon.splashPosition;
	}

	$scope.selectDragon($scope.dragons[0]);
	$scope.selectSplash($scope.dragons[1]);
}]);