function calcular() {
    var form = document.calculoIMC;
    var altura = form.altura.value;
    var peso = Number(form.peso.value);

    if (altura.indexOf(',') > -1) {
        altura = altura.replace(',', '.');
    }

    altura = Number(altura);

    var IMC = peso / Math.pow(altura, 2);
    var resultado = 'O seu IMC é ' + IMC.toFixed(2) + '<br>';

    /* --- Restrições --- */

    var IMC_r = IMC.toFixed(2);
    if (IMC_r <18.5) {
        resultado += 'Você encontra-se abaixo do peso ideal.';
    } else if (IMC_r <25) {
        resultado += 'Você está no seu peso normal. Parabéns !!';
    } else if (IMC_r < 30) {
        resultado += 'Você está acima do peso ideal (sobrepeso).';
    } else if (IMC_r < 35) {
        resultado += 'Obesidade Grau I.';
    } else  if (IMC_r < 40){
        resultado += 'Obesidade Grau II.';
    } else {
        resultado += 'Obesidade Grau III.';
    }

    /* ----- */

    document.getElementById('resultado').innerHTML = resultado;
}
