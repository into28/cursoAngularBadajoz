
class AppController {
    
    constructor ($scope){
        this.$scope = $scope;
    }

    $onInit(){
        this.user ={
            name: 'Pepe',
            apellidos: 'Pérez'
        }
        this.curso='AngularJS';
    }

    borrar = function (){
        this.user.name = "";
        console.log(this);
    }
}

const suma = (a,b) => {
    return a+b;
}

const precioTotal = precio => {return precio*1,22}

angular.module("appMain")  //Es lo mismo que angular.module("appMain")
.controller("AppController", AppController)