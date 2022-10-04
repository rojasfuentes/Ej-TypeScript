interface CocheBase{
    getModelo():string;
    getColor():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string 
    public modelo: string 
    public velocidad: number 

    constructor(){
        this.color= 'Blaco'
        this.modelo= 'BMW'
        this.velocidad= 0
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }
    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public acelerar(){
        this.velocidad ++;
    }
    
    public frenar(){
        this.velocidad --;
    }
    
    public getVelocidad():number{
        return this.velocidad;
    }
}

var coche = new Coche();

coche.setColor("Rojo");

console.log("El color del coche 1 es:"+coche.color)

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

console.log("La velocidad del coche es "+coche.velocidad+"km por hora")

console.log("El modelo del coche es "+coche.modelo);

coche.setModelo("Nissan");
console.log("El modelo del coche es "+coche.modelo);