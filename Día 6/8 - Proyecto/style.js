let array5 = [2, 4, 2, 2, 2];


function listaNotas(){
    let elementoResultadoLista = document.getElementById("resultadoLista");

    for (let listaNotasRe of array5){
        let itemLista = document.createElement("li");
        itemLista.innerText = listaNotasRe;
        elementoResultadoLista.appendChild(itemLista);
    }
}

function promedioEstu(){
    let suma = 0;
    for (x=0; x<5; x++){
        suma += array5[x];
    }

    let promedio = (suma / 5);
    document.getElementById("resultadoBtn").textContent = promedio
}

function notaAlta(){
    let notamaslta = 0;
    let i = 0;
    while ( i < 5){
        if (array5[i] > notamaslta){
            notamaslta = array5[i];
        }
        i++;
    }
    document.getElementById("resultadoBtn").textContent = notamaslta;
}

function notaAplazo(){
    let aplazo = "No"
    let y = 0;

    do {
        if(array5[y] < 2){
            aplazo = "Si";
            break;
        }
        y++;
    } while(y < array5.length);

    document.getElementById("resultadoBtn").textContent = aplazo;

}