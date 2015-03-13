ikeda.controller('NowPlayingController', ['$scope','$rootScope', 'SoundcloudService', function($scope, $rootScope, SoundcloudService) {
	'use strict';
	console.log('#### Now Playing Controller');
	$rootScope.tracks = SoundcloudService.tracks();
	$scope.trackSelected = 'false';
	$rootScope.trackPlaying = 'false';
	$scope.showNowPlaying = 'false';
	$scope.nowPlayingTrack = 'none';
	$rootScope.setIt = function(track, index) {
		console.log('### Setting the now playing track');
		console.log(track);
		$scope.trackIndex = index;
		$scope.trackSelected = 'true';
		$scope.nowPlayingTrack = track;
		$scope.showNowPlayingCard();
		$scope.trackSelected = 'true';
	}

	$scope.hideNowPlaying = function() {
		$scope.showNowPlaying = 'false';
	}

	$scope.showNowPlayingCard = function() {
		$scope.showNowPlaying = 'true';
	}

	$rootScope.playPreviousTrack = function(index) {
		console.log('### Going to play the previous track ');
		if(index === 0) {
			console.log('#### alredy 0');
			$rootScope.setIt($rootScope.tracks[index].id, index);
		} else {
			$rootScope.setIt($rootScope.tracks[index - 1].id, index - 1);
		}
	}
	$rootScope.playNextTrack = function(index) {
		console.log('### Going to play the next track ' + index);
		$rootScope.setIt($rootScope.tracks[index + 1].id, index + 1);
	}	
}]);