ikeda.controller('LandingController', [
  '$scope',
  '$state',
  '$rootScope',
  '$timeout',
  function(
    $scope,
    $state,
    $rootScope,
    $timeout) {
    'use strict';
    console.log('#### Landing Controller');
    $scope.showBackground = 'one';
    $scope.loadingSuccess = 'false';

    $scope.applyBackground = function(number) {
      $scope.showBackground = number;
    };

    // $timeout(function() {
    //   $scope.loadingSuccess = 'true';
    //   $scope.showNameAndIcons();
    //   $timeout(function() {
    //     $rootScope.allImagesHaveLoaded = 'true';
    //   }, 5900);
    // }, 5000);
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

    setTimeout(function() {
      $scope.loadingSuccess = 'true';
      $scope.showNameAndIcons();
      $scope.$apply();
    }, 3000);
    setTimeout(function() {
      $rootScope.allImagesHaveLoaded = 'true';
    }, 3500);
    // $scope.imageLoaded = function() {
    //   console.log('####### Image has loaded ########');
    // };
    $scope.goToDesktopRoute = function(route) {
      if (route === 'music') {
        $state.go('app.v1.music-desktop');
      }
      if (route === 'booking') {
        $state.go('app.v1.booking-desktop');
      }
    }
  }
]);
