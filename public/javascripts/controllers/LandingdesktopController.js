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
    $scope.backgroundVideo = document.getElementById('background-video');
    $scope.actualVideo = document.getElementById('actual-video');
    $scope.backgroundVideo.play();
    $scope.backgroundVideo.addEventListener('loadedmetadata', function() {
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
    var init = function() {
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
                    }, 400);
                  }, 400);
                }, 400);
              }, 400);
            }, 400);
          }, 500);
        }, 500);
      };
      $scope.goToView = function(view) {
        if (view === 'music') {
          $state.go('app.v1.music-desktop')
        }
        if (view === 'booking') {
          $state.go('app.v1.booking-desktop')
        }
      };
      $scope.showVideo = function() {
        $scope.backgroundVideo.pause();
        $scope.playing = true;
        $scope.showVideoBackdrop = true;
        $timeout(function() {
          $scope.fadeinVideoBackdrop = true;
          $timeout(function() {
            $scope.showActualVideo = true;
            $timeout(function() {
              $scope.fadeinActualVideo = true;
              $scope.actualVideo.play();
              $scope.actualVideo.addEventListener('loadedmetadata', function() {
                var video = this;
                video.currentTime = 0;
              }, false);
            }, 400);
          }, 400)
        }, 400);
      };
      $scope.hideVideo = function() {
        $scope.backgroundVideo.play();
        $scope.playing = false;
        $scope.actualVideo.pause();
        $scope.fadeinActualVideo = false;
        $timeout(function() {
          $scope.showActualVideo = false;
          $timeout(function() {
            $scope.fadeinVideoBackdrop = false;
            $timeout(function() {
              $scope.showVideoBackdrop = false;
            }, 300);
          }, 300);
        }, 1200);
      };

      $scope.toggleVideo = function() {
        if($scope.playing) {
          $scope.showPause = true;
          $scope.actualVideo.pause();
          $scope.playing = false;  
        } else {
          $scope.showPause = false;
          $scope.actualVideo.play();
          $scope.playing = true;  
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
    }, 800);
  }
]);
