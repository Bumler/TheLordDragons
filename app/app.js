var lordDragonApp = angular.module('lordDragonApp', ['ui.bootstrap','ngAnimate', 'ngTouch'])

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
		title: "The Shooting Star",
		icon: "../img/LSD_ico.jpg",
		splash: "../img/LordSpaceDragon.jpg",
		index: 0,
		lore: "Lord Space Dragon floats through the cosmos bringing epic saves and beautiful goals wherever he travels. With the ability to fly at the speed of light and strike with the force of a thousand suns opponents would have better luck trying to escape a black hole than defeat Lord Space Dragon."
	},
	{
		name: "Lord Dark Dragon",
		title: "The Captain",
		icon: "../img/LDD_ico.jpg",
		splash: "../img/LordDarkDragon.jpg",
		index: 1,
		lore: "\"Even though I walk through the darkest valley, I will fear no evil. For I am the evil. At my darkest hour you'll find me in the back of your net with the ball. I am the darkness that will drop your rank lower than the depths of hell. Once I am done with you, you'll be in a dark place where not even the light touch a victory can save you. I am the monster your teammates warned you about...\""
	},
	{
		name: "Lord Alchemist Dragon",
		title: "The Potion Master",
		icon: "../img/LAD_ico.jpg",
		splash: "../img/LordAlchemistDragon.jpg",
		index: 2,
		lore: "In a time of intelectual darkness a bright student made a potion that turned his skin into scales of a dragon. He is now Lord Alchemy Dragon and he finds new ways to satisfy his chemistry needs through team chemistry. Careful though, he is a reactive element and may blow you up."
	},
	{
		name: "Lord Frost Dragon",
		title: "The Frozen Hearted",
		icon: "../img/LFD_ico.jpg",
		splash: "../img/LordFrostDragon.jpg",
		index: 3,
		lore: "Forged within the frozen wastelands of the lonely arctic, Lord Frost Dragon is no stranger to getting things done on his own. His ability to take teams apart one by one and find a way to score unassisted is next to none. However, when given crisp passes he only becomes more fearsome leaving the mightiest of goalies frozen."
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