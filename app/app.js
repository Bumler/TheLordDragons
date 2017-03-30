var lordDragonApp = angular.module('lordDragonApp', ['ui.bootstrap','ngAnimate'])

// LordDragonApp.config(function(){
// 	//anything that needs to happen before the app runs
// });

// LordDragonApp.run(function(){
// 	//fires at run-time
// });

.controller('lordDragonController', ['$scope','$interval', function($scope, $interval){

	$scope.hover = false;

	$scope.dragons = [
	{
		name: "Lord Space Dragon",
		title: "The Creator",
		icon: "../img/LSD_ico.jpg",
		splash: "../img/LordSpaceDragon.jpg",
		splashPosition: "center center",
		index: 0,
		lore: "Lord Space Dragon floats through the cosmos bringing epic saves and beautiful goals wherever he travels. With the ability to fly at the speed of light and strike with the force of a thousand suns opponents would have better luck trying to escape a black hole than defeat Lord Space Dragon."
	},
	{
		name: "Lord Dark Dragon",
		title: "The Captain",
		icon: "../img/LDD_ico.jpg",
		splash: "../img/LordDarkDragon.jpg",
		splashPosition: "center center",
		index: 1,
		lore: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel iaculis quam. Integer ut interdum nisi, vitae pretium ligula. Nam suscipit lacus convallis purus auctor tincidunt. Ut nec massa vitae diam venenatis viverra vel at ante."
	},
	{
		name: "Lord Alchemist Dragon",
		title: "The Demolisher",
		icon: "../img/LAD_ico.jpg",
		splash: "../img/LordAlchemistDragon.jpg",
		splashPosition: "center 7%",
		index: 2,
		lore: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel iaculis quam. Integer ut interdum nisi, vitae pretium ligula. Nam suscipit lacus convallis purus auctor tincidunt. Ut nec massa vitae diam venenatis viverra vel at ante."
	},
	{
		name: "Lord Frost Dragon",
		icon: "../img/LFD_ico.jpg",
		splash: "../img/LordFrostDragon.jpg",
		splashPosition: "center 15%",
		index: 3,
		lore: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel iaculis quam. Integer ut interdum nisi, vitae pretium ligula. Nam suscipit lacus convallis purus auctor tincidunt. Ut nec massa vitae diam venenatis viverra vel at ante."
	}
	];

	$scope.splashDragon = {	};

	var splashPicker = $interval(function() {
		var num = Math.floor((Math.random() * $scope.dragons.length) + 0);
		$scope.selectSplash($scope.dragons[num]);
	}, 10000);

	$scope.selectSplash = function(dragon){
		$scope.splashDragon.name = dragon.name;
		$scope.splashDragon.icon = dragon.icon;
		$scope.splashDragon.splash = dragon.splash;
		$scope.splashDragon.splashPosition = dragon.splashPosition;
	};

	$scope.selectSplash($scope.dragons[1]);
}]);