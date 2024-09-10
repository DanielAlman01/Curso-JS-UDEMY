function mostrarResultado(resultado) {
    document.getElementById("numRespuesta").value = resultado
}

function suma() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Num1 + Num2)
}

function resta() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Num1 - Num2)
}

function multiplicacion() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Num1 * Num2)
}

function division() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Num1 / Num2)
}

function raiz() {
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Math.sqrt(Num2))
}

function cuadrada() {
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Math.abs(Num2))
}

function potencia() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Math.pow(Num1, Num2))
}

function valorAbsoluto() {
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Math.abs(Num2))
}

function random() {
    let Num1 = +document.getElementById("numConten1").value;
    let Num2 = +document.getElementById("numConten2").value;
    mostrarResultado(Math.floor(Math.random() * (Num2 - Num1) + Num1));
}

function round(){
    let resultado = +document.getElementById("numRespuesta").value;
    mostrarResultado(Math.round(resultado));
}

function floor(){
    let resultado = +document.getElementById("numRespuesta").value;
    mostrarResultado(Math.floor(resultado));
}

function ceil(){
    let resultado = +document.getElementById("numRespuesta").value;
    mostrarResultado(Math.ceil(resultado));
}