function verTabla(){
    //Obtener el numero
    let elementoNum = document.getElementById("tablaMulti");
    let textoNumeroTabla = elementoNum.value;
    let numeroTabla = +(textoNumeroTabla);

    //Obtener la tabla
    let elementoResultado = document.getElementById("mostaraTabla");

    //Producir y mostrar resultados
    for (x=0; x<=10; x++) {
        //Calcular el resultado
        let resultado = numeroTabla * x;

        //Armar string con el resultado
        let textoResultado = numeroTabla + " X " + x + " = " + resultado;

        let itmeLista = document.createElement("li");
        itmeLista.innerText = textoResultado;
        elementoResultado.appendChild(itmeLista);
    }
}


