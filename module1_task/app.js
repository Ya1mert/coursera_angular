(function(){
  "use strict";

  angular.module('LunchChecker', [])
    .controller('Cntrl', Cntrl);

  Cntrl.$inject = ["$scope"];

  function Cntrl($scope){

    // $scope.answer = 'Placeholder';

    $scope.checkEverything = function(){
      if ( $scope.inputs === undefined ) { return $scope.answer = "Please enter data first"}; //Checking for empty inputs
      var inputArray = $scope.inputs.split(',');
      var a = inputArray.length;
      var resultArray = [];
      for (var i=0; i < a ; i++){
        if (inputArray[i] != '') { resultArray.push(inputArray[i])}   // Filter mechanism for checking for an 'empty' item as a bonus feature
      };
      ( resultArray.length < 4) ? $scope.answer = "Enjoy!" : $scope.answer = "Too much!";
    };
  }

})();
