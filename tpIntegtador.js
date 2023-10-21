function calcularResumen(){
    
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    
    if(cantidad === NaN){
        alert("introduzca un valor numerico por favor");
    }


    var valorTickets = 200;

    var cantidadTickets = valorTickets * cantidad;

    var porcentaje = 0;
    console.log("categoria", categoria);
    switch (categoria) {
    case "1":
        porcentaje = 0.20;
        break;
    case "2":
        porcentaje = 0.50;
        break;
    case "3":
        porcentaje = 0.85;
        break;
   }

   var total = cantidadTickets * porcentaje;
   console.log(total);

   document.getElementById("resultado").innerHTML = total;

   
}

function eliminar(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = 0;
    document.getElementById("resultado").innerHTML = 0;
}