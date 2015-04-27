ikeda.controller('LandingdesktopController', [
  '$scope',
  '$state',
  '$rootScope',
  '$timeout',
  function(
    $scope,
    $state,
    $rootScope,
    $timeout) {
    'use strict';
    console.log('#### Landing Controller');

    // Init
    var init = function() {
      var backgroundVideo = document.getElementById('background-video');
      backgroundVideo.play();
      backgroundVideo.addEventListener('loadedmetadata', function() {
        var video = this;
        var startVideo = function() {
          console.log('#### Starting the video');
          video.currentTime = 35;
          $timeout(function() {
            video.currentTime = 70;
            $timeout(function() {
              video.currentTime = 95;
              $timeout(function() {
                startVideo();
              }, 7000);
            }, 7000);
          }, 7000);
        };
        startVideo();
      }, false);

      $timeout(function() {
        // $scope.dimensions = $rootScope.getDimensions();
        $scope.startLandingAnimations();
      }, 500);

      // Ui-repsonders
      $scope.hoverLandingLinks = function(route) {
        $scope.currentHoverLink = route;
      };
      $scope.startLandingAnimations = function() {
        $timeout(function() {
          $scope.showLandingPlayButton = true;
          $timeout(function() {
            $scope.showIkedaName = true;
            $timeout(function() {
              $scope.showLandingCircle = true;
              $timeout(function() {
                $scope.showLandingLines = true;
                $timeout(function() {
                  $scope.showLandingLink = 1;
                  $timeout(function() {
                    $scope.showLandingLink = 2;
                    $timeout(function() {
                      $scope.showLandingLink = 3;
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 1000);
        }, 1000);
      };
      $scope.goToView = function(view) {
        if(view === 'music') {
          $state.go('app.v1.music-desktop')
        }
        if(view === 'booking') {
          $state.go('app.v1.booking-desktop')
        }
      };  
      // Ui-relayers
      $rootScope.$on('window resized', function(e) {
        console.log('#### Window has been resized');
        e.preventDefault();
        $scope.$apply(function() {
          $scope.dimensions = $rootScope.getDimensions();
        });
      });
    };
    $timeout(function() {
      init();
    }, 1000);
  }
]);
