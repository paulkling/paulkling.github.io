var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $modal, $log) {
  $scope.name = 'World';
  
  $scope.animationsEnabled = true;
  
  $scope.buttonToggle = function(buttonNumber) {
    $log.info('Modal dismissed at: ' + buttonNumber);
    this.buttonPressed = buttonNumber === this.buttonPressed ? 0 : buttonNumber;
  };
  
  $scope.open = function (size) {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html', //look at index.hmtl to see source
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
});



app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    
  };
  


  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});



