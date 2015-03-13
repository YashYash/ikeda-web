ikeda.directive('soundcloudNowplaying', [
  function() {
  'use strict';
  console.log('#### Soundcloud now playing Directive');
  return {
    restrict: 'E',
    scope: {
      track: '=',
      index: '='
    },
    link: function(scope, element, attrs) {
      console.log('#### Soundcloud DOM control');

    },
    templateUrl: "/views/soundcloud-nowplaying.html",
    controller: ['$scope', '$rootScope', '$http','SoundcloudService' ,'moment', function($scope, $rootScope, $http, SoundcloudService, moment) {
    	console.log('#### Soundcloud controller');
    	$scope.clientId = 'b4e366b2dacd7e9f6e17183a3ed08db7';
      $scope.progress = 0;
      $scope.started = false;  
      $scope.playing = 'false';
      $scope.elapsed = '00:00';
      $scope.getTrackInfo = function() {
        $scope.currentTrack = $scope.track;
        var soundCloudTrack = SoundcloudService.track($scope.track);
        soundCloudTrack.then(function(data) {
          console.log('#### Got the soundcloud track');
          $scope.title = data.title;
          $scope.backgroundImage = data.artwork_url;  
          console.log(data);
          $scope.wave = data.waveform_url;
          $scope.stream = data.stream_url + '?client_id=' + $scope.clientId;
          $scope.song = new Audio($scope.stream);
          $scope.playTrack();
          $scope.song.ontimeupdate = function(){
            var elapsedTime = $scope.song.currentTime;
            var duration = $scope.song.duration;
            var progress = (elapsedTime / duration) * 100;
            $scope.$apply(function () {
                $scope.progress = progress;
                $scope.elapsed = moment($scope.elapsed, 'mm:mm').add('second', 1).format('mm:mm');
                if($scope.progress === 100) {
                  $scope.nextTrack();
                }
            });
          }       
        });
      };

      $scope.$watch('track', function() {
        if($scope.track === 'none') {
          console.log('#### there is no track');
        } else {
          if($scope.song) {
            $scope.pauseTrack();
          }
          $scope.getTrackInfo();
        }
      });

      $scope.playTrack = function() {
          $scope.playing = 'true';
          $rootScope.trackPlaying = 'true';
          $scope.song.play();
          console.log($scope.index);
      }

      $scope.pauseTrack = function() {
        $rootScope.trackPlaying = 'false';
          $scope.playing = 'false';
          $scope.song.pause();        
      }
  
      $scope.toStart = function() {
        $scope.song.currentTime = 0;
      }   
      $scope.toQuarter = function() {
        $scope.song.currentTime = $scope.song.duration / 4;
      }  
      $scope.toThreeQuarter = function() {
        $scope.song.currentTime = ($scope.song.duration / 4) * 3;
      }  
      $scope.previousTrack = function() {
        $rootScope.playPreviousTrack($scope.index);
      }
      $scope.nextTrack = function() {
        $rootScope.playNextTrack($scope.index);
      }
 	   	
    }]
  };
}]);
