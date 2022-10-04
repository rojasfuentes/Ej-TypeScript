"use strict";
//Modulos
var Tienda;
(function (Tienda) {
    class Ropa {
        constructor(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
    }
    Tienda.Ropa = Ropa;
    //  Utilizamos export    
    class Informatica {
        constructor(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnologia: " + titulo);
        }
    }
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
//decoradores
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
//utilizamos el MODULO
var Informatica = Tienda.Informatica;
let cargarInformatica = new Informatica('supertienda');
//Vemos herencia
/* @arranque('Lanzamiento del programa exitoso') */
class Programa {
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
}
/*
var programa= new Programa();
programa.lanzamiento(); */
class EditorVideo extends Programa {
    getTimeline() {
        return this.timeline;
    }
    setTimeline(timeline) {
        this.timeline = timeline;
    }
    getAllData() {
        return this.nombre + " - " + this.version + " - " + this.timeline;
    }
}
var editor = new EditorVideo();
editor.setNombre('Camtasia');
editor.setVersion(5.0);
editor.setTimeline(2000);
console.log(editor.getAllData());
//Logica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
