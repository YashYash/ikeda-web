ikeda.controller('BookingController', [
  '$scope',
  '$stateParams',
  '$state',
  function(
    $scope,
    $stateParams,
    $state) {
    'use strict';
    console.log('#### Booking Controller');
    console.log($stateParams);
    if($stateParams.route) {
    	$state.go('app.v1.landing');
    }
  }
]);
