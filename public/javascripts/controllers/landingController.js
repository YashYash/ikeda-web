ikeda.controller('LandingController', [
	'$scope', 
	'$state',
	'$rootScope',
	function(
		$scope,
		$state,
		$rootScope) {
	'use strict';
	console.log('#### Landing Controller');
	$scope.showBackground = 'one';
	$scope.loadingSuccess = 'false';
	$scope.applyBackground = function(number) {
		$scope.showBackground = number;
	};

	$scope.imageLoaded = function() {
		console.log('####### Image has loaded ########');
		setTimeout(function() {
			$scope.loadingSuccess = 'true';
			$scope.showNameAndIcons();
			$scope.$apply();
		}, 3000);
		setTimeout(function() {
			$rootScope.allImagesHaveLoaded = 'true';
		}, 3500);
	};	
	$scope.showNameAndIcons = function() {
		setTimeout(function() {
			$scope.showName = 'true';
		}, 500);
		setTimeout(function() {
			$scope.showMusic = 'true';
		}, 1000);	
		setTimeout(function() {
			$scope.showSocial = 'true';
		}, 1500);
		setTimeout(function() {
			$scope.showShop = 'true';
		}, 2000);
		setTimeout(function() {
			$scope.showBooking = 'true';
		}, 2500);							
	}

	$scope.goToDesktopRoute = function(route) {
		if(route === 'music') {
			$state.go('app.v1.music-desktop');
		}
		if(route === 'booking') {
			$state.go('app.v1.booking-desktop');
		}
	}
}]);