angular.module("appModule")  //Es lo mismo que angular.module("appMain")
.controller("AppController", AppController)


function AppController () {
    
    this.user ={
        name: 'Antonia',
        apellidos: 'Domínguez Pozo'
    }
    this.curso='AngularJS';

    this.borrar =  function (){
        this.user.name = "";
        // console.log(this);
    }
}