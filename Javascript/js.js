let nome = prompt("Digite seu nome");
let altura = prompt("Digite sua altura em Centímetros");
let peso = prompt("Digite seu Peso em KG");

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;

let imc = peso / (altura * altura);

imc = imc.toFixed(2);

let classificacao = undefined ;

if(imc <= 16){
    classificacao = "Baixo peso muito grave"

} else if( imc > 16 && imc < 16.99){
    classificacao = "Baixo peso grave"
} else  if( imc > 17 && imc < 17.49){
    classificacao = "Baixo peso"
} else  if( imc > 18.50 && imc < 24.99){
    classificacao = "Peso Normal"
} else  if( imc > 25 && imc < 29.99){
    classificacao = "Sobrepeso"
} else  if( imc > 30 && imc < 34.99){
    classificacao = "Obesidade Grau 1"
} else  if( imc > 35 && imc < 39.99){
    classificacao = "Obesidade Grau 2"
} else  if( imc > 40){
    classificacao = "Obesidade Grau 3"
}

document.write( nome + ", possui índice de massa corporal igual a : " + imc + ", sendo classificado como:" + classificacao )
