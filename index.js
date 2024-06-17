function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if (peso && altura && altura < 3) {
        var imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = "Seu IMC é: " + imc.toFixed(2);
    } else {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
    }
}