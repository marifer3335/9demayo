function tablas(){
    var texto="";
    var i;
    for(i=1;i<=10;i=i+1){
        texto=texto+i+"<br>";
        <div class="row">
            <div class="col-1">1</div>
            <div class="col-2">2</div>
        </div>

    }
    document.getElementById("tablas").innerHTML=texto;
}
