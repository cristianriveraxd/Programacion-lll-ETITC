var today = new Date();
var hourNow = today.getHours();
var dia;
if (hourNow > 18) {
    dia = 'Buenas noches';
} else if (hourNow > 12) {
    dia = 'Buenas tardes';
} else if (hourNow >= 0) {
    dia = 'Buenos días';
} else {
    dia = 'Welcome';
}
document.getElementById('dia').textContent = dia;

var options = { month: 'long', day: 'numeric', year: 'numeric' };
var fecha = today.toLocaleDateString('es-ES', options);
document.getElementById('fecha').textContent = fecha;

function sumarNumeros() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 + num2;
    alert('El resultado es ' + resultado);
    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
}
