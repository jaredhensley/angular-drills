angular.module('parseApp').controller('parseCtrl', function ($scope, parseService) {

  $scope.types = ['7/11s', 'restaurant', 'strip-clubs', 'zoos', 'bars', 'barbers', 'time-machines', 'prisons'];

  $scope.checkType = function () {
    console.log($scope.bizType);
  }

  $scope.addBiz = function () {
    parseService.postBiz($scope.biz).then(function (res) {
      console.log(res);
      $scope.biz = '';

    }, function (err) {
      console.log('something bad happened', err);
    });
  }

  parseService.getBiz().then(function (res) {
    console.log(res.data.results);
    $scope.biznesses = res.data.results;
  });
})