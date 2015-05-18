angular.module('home', []).controller('homeCtrl', function($scope, $http, $modal, $log) {

  $scope.jobnumber;
  	
  $scope.subjects = [
    {"name":"paul",
     "piecenumber":"CK10M100H001",
     "seq":45,
     "image":"http://dummyimage.com/250x300/0008ff/ffffff.png",
     "redobgr": 0
    },
    {"name":"Fred",
     "piecenumber":"CK10M100H001",
     "seq": 472,
     "image":"http://dummyimage.com/250x300/00ffff/000000.png",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H002",
     "seq": 3,
     "image":"http://dummyimage.com/250x300/ff08f0/ffffff.png",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 55,
     "image":"http://dummyimage.com/250x300/fffff0/000000.png",
     "redobgr": 0 
    },
    {"name":"Fred e",
     "piecenumber":"CK10M100H001",
     "seq": 57,
     "image":"http://dummyimage.com/250x300/ffff00/000000.png",
     "redobgr": 0 
    }
  ];
  
  
  $scope.logSubjects = function () {
    $log.info(JSON.stringify($scope.subjects));  
  };
  
  $scope.openJob = function () {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'js/newjob/newjob.html',
      controller: 'NewJobCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (jobnumber) {
      $log.info('Jobnumber is: ', jobnumber);
      $scope.jobnumber = jobnumber;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
});
