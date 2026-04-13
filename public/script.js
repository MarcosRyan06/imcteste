let ultimoIMC = null;

function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);
    ultimoIMC = imc;

    let mensagem = "";

    if(imc <= 18.5){
        mensagem = "Abaixo do peso";
    }else if(imc >= 18.5 && imc <=24.9){
        mensagem = "Peso normal";
    }else if(imc >=24.9 && imc <= 29.9 ){
        mensagem = "Sobrepeso";
    }else{
        mensagem = "Obesidade";
    }

    document.getElementById("resultado").innerHTML = `IMC ${imc.toFixed(2)} - ${mensagem}`;
}