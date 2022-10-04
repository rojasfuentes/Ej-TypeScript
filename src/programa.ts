//Modulos
module Tienda{
    export class Ropa{
        constructor(public titulo:string){
            alert(titulo);
        }
    }
//  Utilizamos export    
    export class Informatica {
        constructor(public titulo:string){
            alert("Tienda de tecnologia: "+titulo);
        }
    }
}

//decoradores
function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function(): void{
            console.log(lanzar)
        }
    }
}

//utilizamos el MODULO
import Informatica= Tienda.Informatica;
let cargarInformatica = new Informatica('supertienda')

//Vemos herencia
/* @arranque('Lanzamiento del programa exitoso') */
class Programa{
    public nombre:String | undefined;
    public version: number | undefined;

    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre: string){
        this.nombre = nombre;
    }
    
    public getVersion(){
        return this.version;
    }
    public setVersion(version: number){
        this.version = version;
    }
}
/* 
var programa= new Programa();
programa.lanzamiento(); */

class EditorVideo extends Programa{
    public timeline:number | undefined;

    public getTimeline(){
        return this.timeline;
    }
    public setTimeline(timeline: number){
        this.timeline = timeline;
    }

    getAllData(){
        return this.nombre+ " - " +this.version+ " - " + this.timeline
    }
}
var editor = new EditorVideo();
editor.setNombre('Camtasia');
editor.setVersion(5.0);
editor.setTimeline(2000);

console.log(editor.getAllData())

//Logica del formulario

var programas: Array<Programa>=[]
function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa= new Programa();
    programa.setNombre(nombre);
    
    programas.push(programa)

    var list= "";
    for(var i=0; i<programas.length; i++){
        list = list+"<li>"+programas[i].getNombre()+"</li>"
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;
}