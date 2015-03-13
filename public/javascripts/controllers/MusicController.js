ikeda.controller('MusicController', ['$scope', '$rootScope', 'SoundcloudService', function($scope, $rootScope, SoundcloudService) {
	'use strict';
	console.log('#### Music Controller');
	// $rootScope.tracks = SoundcloudService.tracks();
	if($rootScope.loaded === 'true')  {
		console.log('### Controler has already loaded');
	} else {
		$rootScope.tracks = SoundcloudService.tracks();
		$rootScope.loaded = 'true'
	}
	$scope.playTrack = function(index) {
		$scope.currentSongIndex = index;
		for(var i = 0; i < $scope.tracks.length; i++) {
			$scope.tracks[i].playing = 'false';
		}
		$scope.tracks[index].playing = 'true';
	};

	$scope.pauseTrack = function(index) {
		$scope.tracks[index].playing = 'false';
	};	
}]);