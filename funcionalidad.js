let botonAñadirTarea1 = document.getElementById("añadirTarea1");
let botonAñadirTarea2 = document.getElementById("añadirTarea2");
let botonAñadirTarea3 = document.getElementById("añadirTarea3");
let botonSEGURIDADabrir1 = document.getElementById("vaciarListaSeguridad1");
let botonSEGURIDADabrir2 = document.getElementById("vaciarListaSeguridad2");
let botonSEGURIDADabrir3 = document.getElementById("vaciarListaSeguridad3");

let dejarFondoInutil = document.getElementById("dejarFondoInutil");
let mainAñadirTarea = document.getElementById("mainAñadirTarea");
let mainPreguntaSeguridadVaciar = document.getElementById("mainPreguntaSeguridadVaciar");


let botonNUEVOSubmitearTarea = document.getElementById("tEnviar");
let botonNUEVOsubirPrioridadTarea = document.getElementById("botonNUEVOSubirPrioridad");
let botonNUEVOreducirPriodidadTarea = document.getElementById("botonNUEVOReducirPrioridad");
let botonNUEVOcancelarCrearTarea = document.getElementById("botonCancelarCrearTarea");
let botonNUEVOsalirCrearTarea = document.getElementById("salirCrearTarea");
let botonAceptarVentanaPreguntaSeguridadVaciar = document.getElementById("botonAceptarVentanaPreguntaSeguridadVaciar");
let botonSalirVentanaPreguntaSeguridadVaciar = document.getElementById("botonSalirVentanaPreguntaSeguridadVaciar");


let lista1 = document.getElementById("lista1");
let lista2 = document.getElementById("lista2");
let lista3 = document.getElementById("lista3");

let contenedor1 = document.getElementById("contenedorTareas1");
let contenedor2 = document.getElementById("contenedorTareas2");
let contenedor3 = document.getElementById("contenedorTareas3");

let tareaMadre = document.getElementById("mainTareaMadre");
let tareaHija = tareaMadre.firstElementChild;

let prioridad_TAREANUEVA = 0;
let estado_TAREANUEVA = 0;

let nTareas = 0;

let prioridadTareaNUEVO = document.getElementById("tPrioridad");
let nombreTareaNUEVO = document.getElementById("tNombre");
let descripcionTareaNUEVO = document.getElementById("tDescripcion");

let tituloVentanaModalCreacion2 = document.getElementById("tituloVentanaModalCreacion2");
let tituloVentanaModalCreacion1 = document.getElementById("tituloVentanaModalCreacion1");
let textoSalirVentanaPreguntaSeguridadVaciar = document.getElementById("textoSalirVentanaPreguntaSeguridadVaciar");

let descripcionTarea = document.getElementById("mainMostrarDescripcion");
let descripcionTareaSalir = document.getElementById("descripcionBotonSalir");
let descripcionTareaLEER = document.getElementById("descripcionTareaLEER");
let mapa = new Map();

/* 

#############################

VENTANA DE CREACION DE TAREAS

#############################

*/

botonAñadirTarea1.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(1);
    tituloVentanaModalCreacion1.textContent = "CREAR NUEVA TAREA PARA:";
    tituloVentanaModalCreacion2.textContent = ">>> TO-DO <<<";
});

botonAñadirTarea2.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(2);
    tituloVentanaModalCreacion1.textContent = "CREAR NUEVA TAREA PARA:";
    tituloVentanaModalCreacion2.textContent = ">>> DOING <<<";
});

botonAñadirTarea3.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarCreacionTarea(3);
    tituloVentanaModalCreacion1.textContent = "CREAR NUEVA TAREA PARA:";
    tituloVentanaModalCreacion2.textContent = ">>> DONE <<<";
});

botonNUEVOsalirCrearTarea.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden";
    mainAñadirTarea.style.visibility = "hidden";

    limpiarContenidoCreacionTarea();
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
    
    hola = new Tarea (nombreTareaNUEVO.value, estado_TAREANUEVA, descripcionTareaNUEVO.value, prioridadTareaNUEVO.value);
    mapa.set(nombreTareaNUEVO.value, hola);
    
    limpiarContenidoCreacionTarea();

    insertarTarea(hola);
}); 

botonNUEVOcancelarCrearTarea.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden"; 
    mainAñadirTarea.style.visibility = "hidden";
    
    limpiarContenidoCreacionTarea();
});


/* 

#############################

    VENTANA DE SEGURIDAD

#############################

*/

botonSEGURIDADabrir1.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarSeguridadVaciado();
    textoSalirVentanaPreguntaSeguridadVaciar.textContent = "TO-DO";
});

botonSEGURIDADabrir2.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarSeguridadVaciado();
    textoSalirVentanaPreguntaSeguridadVaciar.textContent = "DOING";
});

botonSEGURIDADabrir3.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarSeguridadVaciado();
    textoSalirVentanaPreguntaSeguridadVaciar.textContent = "DONE";

});

botonAceptarVentanaPreguntaSeguridadVaciar.addEventListener("click", (event) => {
    event.preventDefault();
    vaciarLista();
    dejarFondoInutil.style.visibility = "hidden";
    mainPreguntaSeguridadVaciar.style.visibility = "hidden";

});

botonSalirVentanaPreguntaSeguridadVaciar.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden";
    mainPreguntaSeguridadVaciar.style.visibility = "hidden";
});

descripcionTareaSalir.addEventListener("click", (event) => {
    event.preventDefault();
    dejarFondoInutil.style.visibility = "hidden";
    descripcionTarea.style.visibility = "hidden";
});



/* 

#############################

    FUNCIONES // CLASES

#############################

*/

function mostrarSeguridadVaciado(estado){
    dejarFondoInutil.style.visibility = "initial";
    mainPreguntaSeguridadVaciar.style.visibility = "initial";
}


function mostrarCreacionTarea(estado){
    dejarFondoInutil.style.visibility = "initial";
    mainAñadirTarea.style.visibility = "initial";
    estado_TAREANUEVA = estado;
}




function insertarTarea (tarea){

    let clonTareaMadre = tareaHija.cloneNode(true);
    let nombreTarea = clonTareaMadre.getElementsByClassName("nombreTarea");
    let prioridadTarea = clonTareaMadre.getElementsByClassName("prioridadTarea2");
 
    nombreTarea[0].innerHTML = tarea.nombre;
    prioridadTarea[0].innerHTML = tarea.prioridad;

    clonTareaMadre.style.visibility = "initial";


    switch (tarea.estado){
        case 1:
            contenedor1.appendChild(clonTareaMadre);
            break;

        case 2:
            contenedor2.appendChild(clonTareaMadre);
            break;

        case 3:
            contenedor3.appendChild(clonTareaMadre);
            break;
    }

    nombreTarea[0].addEventListener("click", (event) => {
        event.preventDefault();
    
        descripcionTarea.style.visibility = "initial";
        dejarFondoInutil.style.visibility = "initial";
        descripcionTareaLEER.textContent = tarea.descripcion;
        
    });
}

function vaciarLista (lista){

}

function limpiarContenidoCreacionTarea(){
    nombreTareaNUEVO.value = "";
    descripcionTareaNUEVO.value = "";
    prioridadTareaNUEVO.value = 0;
    prioridad_TAREANUEVA = 0;
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