  function calcImc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;

let imc = peso / (altura * altura);

imc = imc.toFixed(2);

let classificacao = '';
let alerta = "";

if(imc <= 16){
    classificacao = "Baixo peso muito grave"
    alerta = "red"
} else if( imc > 16 && imc < 16.99){
    classificacao = "Baixo peso grave"
    alerta = "red"
} else  if( imc > 17 && imc < 17.49){
    classificacao = "Baixo peso"
    alerta = "orange"
} else  if( imc > 18.50 && imc < 24.99){
    classificacao = "Peso Normal"
    alerta = "blue"
} else  if( imc > 25 && imc < 29.99){
    classificacao = "Sobrepeso"
    alerta = "red"
} else  if( imc > 30 && imc < 34.99){
    classificacao = "Obesidade Grau 1"
    alerta = "red"
} else  if( imc > 35 && imc < 39.99){
    classificacao = "Obesidade Grau 2"
    alerta = "red"
} else  if( imc > 40){
    classificacao = "Obesidade Grau 3"
    alerta = "red"
}

document.getElementById('saida').style.background = alerta;
document.getElementById('saida').style.color = "white";
 document.getElementById('saida').value = classificacao;
 document.getElementById('nome').value = '';
 document.getElementById('altura').value = '';
 document.getElementById('peso').value = '';



  }

