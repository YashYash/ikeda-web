ikeda.directive('soundCloud', [
  function() {
  'use strict';
  console.log('#### Soundcloud Directive');
  return {
    restrict: 'E',
    scope: {
      track: '=',
      playing: '=',
      index: '='
    },
    link: function(scope, element, attrs) {
      console.log('#### Soundcloud DOM control');

    },
    templateUrl: "/views/soundcloud-list.html",
    controller: ['$scope', '$rootScope', '$http','SoundcloudService' , function($scope, $rootScope, $http, SoundcloudService) {
    	console.log('#### Soundcloud controller');
    	$scope.clientId = 'b4e366b2dacd7e9f6e17183a3ed08db7';
        $scope.progress = 0;
        $scope.started = false;  

      var soundCloudTrack = SoundcloudService.track($scope.track);
      soundCloudTrack.then(function(data) {
        console.log('#### Got the soundcloud track');
        $scope.title = data.title;
        console.log(data);
            $scope.wave = data.waveform_url;
            $scope.stream = data.stream_url + '?client_id=' + $scope.clientId;
            $scope.song = new Audio($scope.stream);
            $scope.song.ontimeupdate = function(){
              var elapsedTime = $scope.song.currentTime;
              var duration = $scope.song.duration;
              var progress = (elapsedTime / duration) * 100;
              $scope.$apply(function () {
                  $scope.progress = progress;
                  console.log(progress);
              });
            }       
      });
      $scope.$watch('playing', function() {
        console.log('#### Playing changed');
        if($scope.playing === 'false') {
            $scope.started = false;
            if($scope.song) {
              console.log('#### Pausing');
              $scope.song.pause(); 
            } else {
              console.log('#### song hasnt loaded yet');
            }
        } else {
            $scope.started = true;
            if($scope.song) {
              console.log('#### Playing');
              $scope.song.play();
            } else {
              console.log('#### song hasnt loaded yet');
            }
        }
      });  
      $scope.moveHere = function() {
        $scope.song.currentTime = 19.036381843416137;
      }   

      $scope.setNowPlaying = function() {
        $rootScope.setIt($scope.track);
      }
    	// $scope.pauseTrack = function() {
    	// 	console.log('#### Track is paused');
    	// 	$scope.playing = 'false';
     //        $scope.started = false;
     //        $scope.song.pause();    		
    	// }
     //    $scope.playTrack = function () {
     //    	console.log('#### Track is playing');
     //        $scope.started = true;
     //        $scope.playing = 'true';
     //        $scope.song.play();
     //    }  	   	
    }]
  };
}]);
