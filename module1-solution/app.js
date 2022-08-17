(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.LunchList = "";
  $scope.Message = "";
  $scope.LunchCheck = function () {
    if ($scope.LunchList) {
      if ($scope.LunchList.split(",").length < 4 ) {
        $scope.Message = "Enjoy!";
      }
      else {
        $scope.Message = "Too much!";
      }
    }
    else {
      $scope.Message = "Please enter data first"
    }
  };
}
})();
