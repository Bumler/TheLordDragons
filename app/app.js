var lordDragonApp = angular.module('lordDragonApp', [])

// LordDragonApp.config(function(){
// 	//anything that needs to happen before the app runs
// });

// LordDragonApp.run(function(){
// 	//fires at run-time
// });

.controller('lordDragonController', ['$scope', function($scope){

	$scope.hover = false;

	$scope.selectDragon = function(dragon){
		$scope.selectedDragon.selected = true;
		$scope.selectedDragon.name = dragon.name;
		$scope.selectedDragon.icon = dragon.icon;
		$scope.selectedDragon.splash = dragon.splash;
	}

	$scope.dragons = [
			{
				name: "Lord Space Dragon",
				icon: "../img/LSD_ico.jpg",
				splash: "../img/LordSpaceDragon.jpg"
			},
			{
				name: "Lord Dark Dragon",
				icon: "../img/LDD_ico.jpg",
				splash: "../img/LordDarkDragon.jpg"
			},
			{
				name: "Lord Alchemist Dragon",
				icon: "../img/LAD_ico.jpg",
				splash: "../img/LordAlchemistDragon.jpg"
			},
			{
				name: "Lord Frost Dragon",
				icon: "../img/LFD_ico.jpg",
				splash: "../img/LordFrostDragon.jpg"
			}
		];

	$scope.selectedDragon = {
		selected: false,
		name: "Lord Space Dragon",
		icon: "../img/LSD_ico.jpg",
		splash: "../img/LordSpaceDragon.jpg"
	}

}]);