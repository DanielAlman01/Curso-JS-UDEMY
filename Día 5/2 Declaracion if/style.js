function precio(){
    let precioPro = document.getElementById("precioPro");
    let precio = precioPro.value;
    let cantidadComprada = document.getElementById("cantidadComprada");

    if( precio <= 5 ){
        cantidadComprada.textContent = "Comprar 2 unidades"
    } else {
        if ( precio < 8 ){
            cantidadComprada.textContent = "Comprar 1 unidad"
        } else {
            cantidadComprada.textContent = "No comprar nada"
        }
    }
}