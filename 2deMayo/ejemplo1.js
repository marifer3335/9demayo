function ejemplo1(){
    var texto="";
    var i;
    for(i=1;i<=10;i=i+1){
        texto=texto+i+"<br>";
    }
    document.getElementById("resultado").innerHTML=texto;


}