class MainController {
    
        $onInit () {
            this.texto = "Texto desde papa";
            this.btn1 = "Send"; //"Enviar"
            this.btn2 = "Delete"; //"Borrar"
    
        }
    
       botonEnviar() {
            alert ("Información enviada");
        }
    
       botonBorrar() {
           alert ("Información borrada");
        }
    
    }

angular.module('appPrueba',[])
.component('MainComponent', {
    template:`
        <app-cabeza></app-cabeza>
        <app-core></app-core>
        <app-pie></app-pie>
    `,
    controller: ControllerController,
    bindings: {
        Binding: {}
    }
});
