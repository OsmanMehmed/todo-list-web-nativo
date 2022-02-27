
let botonAñadirTarea = document.getElementById("añadirTarea1");
botonAñadirTarea.addEventListener("click", () =>{
    console.log("ALERTA");
});


function llorar(){
    
}
class Tarea {
    nombre;
    estado;


    constructor(nombre, estado){
        this.nombre = nombre;
        this.estado = estado;
    }
}