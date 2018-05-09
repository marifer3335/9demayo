"use strict"
let menu 
let dato 
let persona ={
     nombre:"Maria",
     edad:22
 }
function preguntas (){
    do{
      alert("1.nombre \n"+
      
             "2.edad \n"+
             "3.¿que quieres saber \n"+
             "4.salir \n");
    menu=Number(prompt("elije la opcion"))
    switch (menu) {
        case 1:
            alert(persona.nombre);
            
            break;
        case 2 :
             alert(persona.edad);
              break;
        case 3: dato=prompt("que quieres saber");
              alert(persona[dato]);
                  break;
        case 4: 
             alert("hasta pronto")
                  break;
             
        
    
        default:
            alert("intenta otra vez");
            break;
    }
      } while(menu!=4)
    
}
