"use strict"
let menu
let celular
let calle
class restaurante{
    constructor(){
        this.nombre="los Arcos";
        this.direccion="Av Vallarta # 456 Zapopan JAL";
        this.telefono="3602-5462";
    }
    obtenerNombre(){
        return this.nombre;
    }
    guardarNombre(nombre){
        this.nombre=nombre;
    }
   obtenerDireccion(){
        return this.direccion;
    }
    guardarDireccion(direccion){
        this.direccion=direccion;
    }
    obtenerTelefono(){
        return this.telefono;
    }
    guardarTelefono(telefono){
        this.telefono=telefono;
    }

}
let fernanda=new restaurante();
 
function ejercicio(){
menu=prompt("escribe el nombre de lo que buscas")
     fernanda.guardarNombre(menu)
 
celular=prompt("reserva via telefonica")
     fernanda.guardarTelefono(celular)
     
calle=prompt("aqui esperamos tu visita")
     fernanda.guardarDireccion(calle)

   alert(fernanda.obtenerNombre(menu));
   alert(fernanda.obtenerDireccion(celular));
   alert(fernanda.obtenerTelefono(calle));
}
   

