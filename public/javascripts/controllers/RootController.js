ikeda.controller('RootController', [
	'$scope',
	'$rootScope',
	'$state', 
	function(
		$rootScope,
		$scope, 
		$state) {
	'use strict';
	console.log('#### Root Controller');
	$scope.showNav = 'false';
	$scope.closeSideNav = function() {
		$scope.showNav = 'false';
	};
	$scope.openSideNav = function() {
		$scope.showNav = 'true';
	};

	$scope.route = function(route) {
		if(route === 'music') {
			$state.go('app.v1.music-mobile');
		}
		if(route === 'booking') {
			$state.go('app.v1.booking-mobile');
		}
		if(route === 'social') {
			$state.go('app.v1.stream-mobile');
		}
		$scope.closeSideNav();
	};

	$rootScope.showSideNav = 'false';
	$rootScope.showSideNavToggle = function() {
		if($rootScope.showSideNav === 'false') {
			$rootScope.showSideNav = 'true';
		} else {
			$rootScope.showSideNav = 'false';
		}
	};	
	$rootScope.$on('hide sidenav', function() {
		$rootScope.showSideNav = 'false';
	}); 
}]);