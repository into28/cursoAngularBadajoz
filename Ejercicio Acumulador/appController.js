angular.module("appMain")  //Es lo mismo que angular.module("appMain")
.controller("AppController", AppController)


function AppController () {
    
    this.incremento = 10;
    this.total = 0;
    
    this.incrementar = function (){
         this.total =  this.total + this.incremento;
    }
     
    this.decrementar = function (){
        if(this.total > 0){
            this.total =  this.total - this.incremento;
        }
        
    }
}