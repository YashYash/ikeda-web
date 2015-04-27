ikeda.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  function(
    $rootScope,
    $scope,
    $state) {
    'use strict';
    console.log('#### Nav Controller');
    $scope.showBackground = 'one';
    $scope.loadingSuccess = 'false';

    $scope.applyBackground = function(number) {
      $scope.showBackground = number;
    };

    $scope.showName = 'true';
    $scope.showMusic = 'true';
    $scope.showSocial = 'true';
    $scope.showShop = 'true';
    $scope.showBooking = 'true';
    $scope.goToDesktopRoute = function(route) {
      if (route === 'home') {
        console.log('#### Going home');
        $state.go('app.v1.landing');
      }      
      if (route === 'music') {
        $state.go('app.v1.music-desktop');
      }
      if (route === 'booking') {
        $state.go('app.v1.booking-desktop');
      }
    }
  }
]);
