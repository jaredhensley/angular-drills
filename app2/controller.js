angular.module('insultApp').controller('insultCtrl', function ($scope, insultService) {

  $scope.getInsult = function () {
    $scope.insults = insultService.getInsult();
  }


});