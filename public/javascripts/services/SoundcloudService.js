ikeda.factory('SoundcloudService', [
	'$http', 
	function($http) {
	'use strict';
	console.log('#### Soundcloud Service');
	var clientId = 'b4e366b2dacd7e9f6e17183a3ed08db7';
	return {
		track: function(trackId) {
			var url = 'http://api.soundcloud.com/tracks/' + trackId + '.json?client_id=' + clientId
			var result = $http.get(url).then(function(response) {
				return response.data;
			});
			return result;
		},
		tracks: function() {
			var tracks = [
				{
					id: '157186645',
					playing: 'false'
				},
				{
					id: '154819507',
					playing: 'false'
				},
				{
					id: '152976420',
					playing: 'false'
				},
				{
					id: '151560001',
					playing: 'false'
				},
				{
					id: '150798397',
					playing: 'false'
				},
				{
					id: '150139683',
					playing: 'false'
				},
				{
					id: '146783550',
					playing: 'false'
				},	
				{
					id: '146669221',
					playing: 'false'
				},	
				{
					id: '146279460',
					playing: 'false'
				},	
				{
					id: '145428956',
					playing: 'false'
				},	
				{
					id: '125852869',
					playing: 'false'
				},	
				{
					id: '123598279',
					playing: 'false'
				}																
			];	
			return tracks;		
		}
	}
}]);