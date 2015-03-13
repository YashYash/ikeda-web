ikeda.directive('sizeDirective', [
  function() {
  'use strict';
  console.log('#### Size Directive');
  return {
    restrict: 'E',
    scope: {
      track: '=',
      playing: '=',
      index: '='
    },
    link: function(scope, element, attrs, state) {
      console.log('#### DOM control');
      $(window).on('resize', function() {
        if($(window).width() < 1024) {
          scope.goToState('mobile');
        } else {
          scope.goToState('desktop');
        }
      })
    },
    controller: ['$scope', '$rootScope', '$state' , function($scope, $rootScope, $state) { 	   	
      $scope.goToState = function(state) {
        if(state === 'mobile') {
          console.log('Goiing to mobile')
          if($state.current.url === '/booking'
             || $state.current.url === '/music-mobile'
             || $state.current.url === '/stream') {
          } else {
            $state.go('app.v1.music-mobile');
          }
        } 
        if(state === 'desktop') {
          console.log('Goiing to desktop');
          if($state.current.url === '/landing'
             || $state.current.url === '/music') {
          } else {
            $state.go('app.v1.landing');
          }         
        }
      }
    }]
  };
}]);
