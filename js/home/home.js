angular.module('home', []).controller('homeCtrl', function($scope, $http, $modal, $log) {

  $scope.jobnumber;
  	
  $scope.subjects = [
    {"name":"paul",
     "piecenumber":"CK10M100H001",
     "seq":45,
     "image":"https://placeimg.com/250/300/any/1",
     "redobgr": 0
    },
    {"name":"paul",
     "piecenumber":"CK10M100H001",
     "seq":47,
     "image":"https://placeimg.com/250/300/any/2",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H002",
     "seq": 3,
     "image":"https://placeimg.com/250/300/any/3",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 55,
     "image":"https://placeimg.com/250/300/any/4",
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
  

  $scope.refresh = function (){
    location.reload();
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
      location.reload();
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
});
