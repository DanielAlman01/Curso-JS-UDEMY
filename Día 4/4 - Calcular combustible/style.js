function clacularCombustible(){
    let numCom = document.getElementById("numeroKm");
    let numeroKm = numCom.value;
    let cantKm = Number(numeroKm);

    let cantLitros = Math.ceil(cantKm / 8.8);

    let resultado = document.getElementById("resultadoTxt");
    resultado.textContent = "Carga " + cantLitros + " Litros de combustible"
}