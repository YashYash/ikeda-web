var ikeda = angular.module('ikeda', ['ionic', 'ngStorage', 'ngLoad']);
'use strict';

console.log('#### APP JS LOADED: ikeda');
ikeda.run(['$rootScope', function($rootScope) {
  console.log('#### App.js .run');
}]);

ikeda.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  console.log('#### State provider working');
  $urlRouterProvider.otherwise('/');
  $stateProvider

    .state('app', {
      url: '/',
      views: {
        'global': {
          templateUrl: '/views/global.html',
          controller: 'GlobalController'
        }
      }
    })
    .state('app.v1', {
      url: 'tab',
      abstract: true,
      views: {
        'global@': {
          templateUrl: '/views/v1/v1.html',
          controller: 'RootController'
        },
        'nav@app.v1': {
          templateUrl: '/views/v1/nav.html',
          controller: 'NavController'
        },
        'content@app.v1': {
          templateUrl: '/views/v1/content.html',
          controller: 'ContentController'
        },
        'nowplaying@app.v1': {
          templateUrl: '/views/v1/nowplaying-mobile.html',
          controller: 'NowPlayingController'
        }
      }
    })
    .state('app.v1.landing', {
      url: '/landing',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/landing.html',
          controller: 'NavController'
        }
      }
    })
    .state('app.v1.music-desktop', {
      url: '/music',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/music-desktop.html',
          controller: 'MusicController'
        }
      }
    })
    .state('app.v1.booking-desktop', {
      url: '/booking',
      views: {
        'content@app.v1': {
          templateUrl: '/views/v1/booking-desktop.html',
          controller: 'BookingController'
        }
      }
    })
    .state('app.v1.music-mobile', {
      url: '/music-mobile',
      views: {
        'music@app.v1': {
          templateUrl: '/views/v1/music.html',
          controller: 'MusicController'
        }
      }
    })
    .state('app.v1.stream-mobile', {
      url: '/stream',
      views: {
        'stream@app.v1': {
          templateUrl: '/views/v1/stream.html',
          controller: 'StreamController'
        }
      }
    })
    .state('app.v1.booking-mobile', {
      url: '/booking-mobile',
      views: {
        'booking@app.v1': {
          templateUrl: '/views/v1/booking.html',
          controller: 'BookingController'
        }
      }
    })
}]);

ikeda.constant('moment', moment);
ikeda.filter('moment', function() {
  return function(dateString, format, calendar) {
    if (format === 'calendar') {
      return moment(dateString).calendar();
    } else {
      return moment(dateString).format(format);
    }
  };
});
