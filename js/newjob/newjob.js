app.controller('NewJobCtrl', function ($scope, $modalInstance, $log) {

  $scope.jobnumber;

  $scope.ok = function () {
    $modalInstance.close($scope.jobnumber);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


