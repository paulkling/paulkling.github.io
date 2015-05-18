angular.module('home', []).controller('homeCtrl', function($scope, $http, $modal, $log, hotkeys) {

  $scope.jobnumber;
  	
  $scope.subjects = [
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq":1,
     "image":"http://placeimg.com/250/300/any/1",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq":2,
     "image":"http://placeimg.com/250/300/any/2",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H002",
     "seq": 3,
     "image":"http://placeimg.com/250/300/any/3",
     "redobgr": 0
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 4,
     "image":"http://placeimg.com/250/300/any/4",
     "redobgr": 0 
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 5,
     "image":"http://dummyimage.com/250x300/ffff00/000000.png",
     "redobgr": 0 
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 6,
     "image":"http://placeimg.com/250/300/any/6",
     "redobgr": 0 
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 7,
     "image":"http://placeimg.com/250/300/any/7",
     "redobgr": 0 
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 8,
     "image":"http://placeimg.com/250/300/any/8",
     "redobgr": 0 
    },
    {"name":"Fred was here",
     "piecenumber":"CK10M100H001",
     "seq": 9,
     "image":"http://placeimg.com/250/300/any/9",
     "redobgr": 0 
    } 
  ];
  
  
  $scope.currentPage = 1;
  $scope.itemsPerPage = 8;
  $scope.maxSize = 6;
  $scope.totalItems = $scope.subjects.length + $scope.itemsPerPage;   
  
  
  $scope.addSubjects = function (){
    for (i = 0; i < 25; i++) { 
      $scope.subjects.push({"name":"Fred was here","piecenumber":"CK10M100H003","seq":$scope.subjects.length+1,"image":"http://dummyimage.com/250x300/ffff00.png/000000&text=image "+($scope.subjects.length+1),"redobgr":0})
    }
    $scope.totalItems = $scope.subjects.length + $scope.itemsPerPage; 
  };
  
  $scope.logSubjects = function () {
    $log.info(JSON.stringify($scope.subjects));  
  };
  

  $scope.refresh = function (){
    location.reload();
  };
   
  $scope.openJob = function () {
    var modalInstance = $modal.open({
      animation: true,
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
  
  hotkeys.bindTo($scope)
    .add({
      combo: 'left',
      description: 'Back one page',
      callback: function () {
        $scope.currentPage = $scope.currentPage-1;
        if ($scope.currentPage<=1)
          $scope.currentPage=1;
       }
    })
    // you can chain these methods for ease of use:
    .add ({
      combo: 'right',
      description: 'Forward one page',
      callback: function () {
        $scope.currentPage = $scope.currentPage+1;
        if($scope.currentPage>= $scope.totalItems/$scope.itemsPerPage)
          $scope.currentPage = $scope.currentPage-1;
        }
    });
 
  
});
