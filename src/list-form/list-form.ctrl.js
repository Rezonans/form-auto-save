angular.module('app')
  .controller('ListFormCtrl', function ($scope) {
    $scope.formData = {};
    $scope.submit = submit;
    $scope.reset = reset;

    function submit() {
      $scope.submittedData = angular.copy($scope.formData);
    }

    function reset() {
      $scope.formData = {};
    }
  });