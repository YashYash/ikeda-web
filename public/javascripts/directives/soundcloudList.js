// ikeda.directive('soundcloudList', [
//   function() {
//   'use strict';
//   console.log('#### Soundcloud List Directive');
//   return {
//     restrict: 'E',
//     scope: {
//       track: '=',
//       index: '='
//     },
//     link: function(scope, element, attrs) {

//     },
//     templateUrl: "/views/soundcloud-list.html",
//     controller: ['$scope', '$rootScope', '$http','SoundcloudService' , function($scope, $rootScope, $http, SoundcloudService) {
//      $scope.clientId = 'b4e366b2dacd7e9f6e17183a3ed08db7';
//       var soundCloudTrack = SoundcloudService.track($scope.track);
//       soundCloudTrack.then(function(data) {
//         console.log('#### Got the soundcloud track');
//         $scope.title = data.title;
//         $scope.pickedTrack = data;
//         $scope.backgroundImage = data.artwork_url;       
//       });


//       $scope.setNowPlaying = function() {
//         console.log('This is the index');
//         console.log($scope.index);
//         $rootScope.setIt($scope.track, $scope.index);
//       };       
//     }]
//   };
// }]);
