function precio() {
    let numeroFruta = document.getElementById("numeroFruta");
    let precioPro = document.getElementById("cantidadComprada");
    let fruta = numeroFruta.value;

    switch (fruta) {
        case "1":
            precioPro.textContent = "10.00"
            break;
        case "2":
            precioPro.textContent = "2.00"
            break;
        case "3":
            precioPro.textContent = "40.00"
            break;
        case "4":
            precioPro.textContent = "5.00"
            break;
        case "5":
            precioPro.textContent = "8.00"
            break;
    }
}