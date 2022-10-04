"use strict";
class Coche {
    constructor() {
        this.color = 'Blaco';
        this.modelo = 'BMW';
        this.velocidad = 0;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    acelerar() {
        this.velocidad++;
    }
    frenar() {
        this.velocidad--;
    }
    getVelocidad() {
        return this.velocidad;
    }
}
var coche = new Coche();
coche.setColor("Rojo");
console.log("El color del coche 1 es:" + coche.color);
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
/* coche.setColor("Rojo");
coche2.setColor("Verde");
coche3.setColor("Azul");

console.log("El color del coche 1 es:" + coche.color);
console.log("El color del coche 2 es:" + coche2.color);
console.log("El color del coche 3 es:" + coche3.color); */
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log("La velocidad del coche es " + coche.velocidad + "km por hora");
console.log("El modelo del coche es " + coche.modelo);
coche.setModelo("Nissan");
console.log("El modelo del coche es " + coche.modelo);
