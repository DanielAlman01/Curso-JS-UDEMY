function recomendar(genero){
    let elementoEdad = document.getElementById("edadPersona").value;
    let recomendacion = document.getElementById("pelicualaRecomendad");


    switch(genero){
        case "comedia":
            if (elementoEdad > 13){
                recomendacion.textContent = "The Truman Show";
            }else{
                if (elementoEdad > 16){
                    recomendacion.textContent = "The Wolf of Wall Street"
                }else{
                    recomendacion.textContent = "Back to the Future"
                }
            }
        break;

        case "crimen":
            if (elementoEdad > 13){
                recomendacion.textContent = "El secreto de sus ojos";
            }else{
                if (elementoEdad > 16){
                    recomendacion.textContent = "The Godfather"
                }else{
                    recomendacion.textContent = "No hay peliculas"
                }
            }
        break;

        case "drama":
            if (elementoEdad > 13){
                recomendacion.textContent = "The Truman Show";
            }else{
                if (elementoEdad > 16){
                    recomendacion.textContent = "The Wolf of Wall Street"
                }else{
                    recomendacion.textContent = "Back to the Future"
                }
            }
        break;

        case "musical":
            if (elementoEdad > 13){
                recomendacion.textContent = "The Truman Show";
            }else{
                if (elementoEdad > 16){
                    recomendacion.textContent = "The Wolf of Wall Street"
                }else{
                    recomendacion.textContent = "Back to the Future"
                }
            }
        break;
    }
}

