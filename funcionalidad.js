let botonAñadirTarea1 = document.getElementById("añadirTarea1");
let botonAñadirTarea2 = document.getElementById("añadirTarea2");
let botonAñadirTarea3 = document.getElementById("añadirTarea3");


let dejarFondoInutil = document.getElementById("dejarFondoInutil");
let mainAñadirTarea = document.getElementById("mainAñadirTarea");


let botonNUEVOSubmitearTarea = document.getElementById("tEnviar");
let botonNUEVOsubirPrioridadTarea = document.getElementById("botonNUEVOSubirPrioridad");
let botonNUEVOreducirPriodidadTarea = document.getElementById("botonNUEVOReducirPrioridad");
let botonNUEVOcancelarCrearTarea = document.getElementById("botonCancelarCrearTarea");
let botonNUEVOsalirCrearTarea = document.getElementById("salirCrearTarea");

let prioridad_TAREANUEVA = 0;
let estado_TAREANUEVA = 0;
let tareaNUEVA;

let prioridadTareaNUEVO = document.getElementById("tPrioridad");
let nombreTareaNUEVO = document.getElementById("tNombre");
let descripcionTareaNUEVO = document.getElementById("tDescripcion");

let tituloVentanaModalCreacion = document.getElementById("tituloVentanaModalCreacion");


botonAñadirTarea1.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(1);
    tituloVentanaModalCreacion.textContent = ">>> TO-DO <<<";
});

botonAñadirTarea2.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(2);
    tituloVentanaModalCreacion.textContent = ">>> DOING <<<";
});

botonAñadirTarea3.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(3);
    tituloVentanaModalCreacion.textContent = ">>> DONE <<<";
});

botonNUEVOsalirCrearTarea.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden";
    mainAñadirTarea.style.visibility = "hidden";
});

botonNUEVOsubirPrioridadTarea.addEventListener("click", (event) => {
    event.preventDefault();
    prioridad_TAREANUEVA++;
    prioridadTareaNUEVO.value = prioridad_TAREANUEVA;
});

botonNUEVOreducirPriodidadTarea.addEventListener("click", (event) => {
    event.preventDefault();
    prioridad_TAREANUEVA--;
    prioridadTareaNUEVO.value = prioridad_TAREANUEVA;
});

botonNUEVOSubmitearTarea.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden"; 
    mainAñadirTarea.style.visibility = "hidden";
    
    tareaNUEVA = new Tarea (nombreTareaNUEVO.value, estado_TAREANUEVA, descripcionTareaNUEVO.value, prioridadTareaNUEVO.value);
    nombreTareaNUEVO.value = "";
    descripcionTareaNUEVO.value = "";
    prioridadTareaNUEVO.value = "";

    insertarTarea(tareaNUEVA);
}); 

botonNUEVOcancelarCrearTarea.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden"; 
    mainAñadirTarea.style.visibility = "hidden";
    
    nombreTareaNUEVO.value = "";
    descripcionTareaNUEVO.value = "";
    prioridadTareaNUEVO.value = "";
});

function mostrarCreacionTarea(estado){
    dejarFondoInutil.style.visibility = "initial";
    mainAñadirTarea.style.visibility = "initial";
    estado_TAREANUEVA = estado;
}


function insertarTarea (tarea){

}

class Tarea {
    nombre;
    estado;
    descripcion;
    prioridad;

    constructor(nombre, estado, descripcion, prioridad){
        this.nombre = nombre;
        this.estado = estado;
        this.descripcion = descripcion;
        this.prioridad = prioridad;

        console.log(nombre);
        console.log(estado);
        console.log(descripcion);
        console.log(prioridad);
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setEstado(estado){
        this.estado = estado;
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
    
    setPrioridad(prioridad){
        this.prioridad = prioridad;
    }
};