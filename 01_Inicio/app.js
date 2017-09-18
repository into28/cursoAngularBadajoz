angular.module("appMain",[])  //Es lo mismo que angular.module("appMain")

.controller("AppController", ['$scope',function($scope) {

    $scope.user ={
        name: 'Pepe',
        apellidos: 'Pérez'
    }
    $scope.curso='AngularJS';

    $scope.borrar =  function (){
        $scope.user.name = "";
        console.log($scope);
    }

}])