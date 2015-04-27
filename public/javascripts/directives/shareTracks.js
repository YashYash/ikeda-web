ikeda.directive('shareTrack', [
  function() {
    'use strict';
    console.log('#### Social share directive');
    return {
      restrict: 'E',
      scope: {
        color: '=',
        google: '=',
        facebook: '=',
        twitter: '=',
        mail: '=',
        track: '=',
        type: '=',
        cssClass: '='
      },
      link: function(scope, element, attrs) {

      },
      templateUrl: "/views/social-share.html",
      controller: ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.share = function(source) {
          console.log('#### Sharing track');
          console.log($scope.track);
          var url = $scope.track.permalink_url;
          var twtTitle = 'Check out ' + $scope.track.title + ' by San Francisco\'s IKEDA';
          var title = 'Check out ' + $scope.track.name + ' by San Francisco\'s IKEDA';
          var mailLink = 'mailto:?Subject=Check%20out%20"' + $scope.track.title + '"%20by%20IKEDA&body=Listen%20to ' + $scope.track.title + ', by IKEDA, here: ' + url;

          if (source === 'facebook') {
            window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + title + '&p[url]=' + url + '&p[images][4]=http://goo.gl/dS52U', 'sharer', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600');
          }
          if (source === 'twitter') {
            var maxLength = 117;
            if (twtTitle.length > maxLength) {
              twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
            }
            var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(twtTitle + ' ' + url, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600');
            window.open(twtLink);
          }
          if (source === 'google') {
            window.open('https://plus.google.com/share?url=' + url, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600');
          }
          if (source === 'mail') {
            window.location.href = mailLink;
          }
        };
      }]
    };
  }
]);
