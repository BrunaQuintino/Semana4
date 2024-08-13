var n1 = document.querySelector('#num1')
var n2 = document.querySelector('#num2')
var resultado = document.getElementById('txt-resultado')


function sum() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

