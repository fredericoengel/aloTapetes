//AQUI COMEÇA O CALCULO PARA MEDIR UM TAPETE RETANGULAR

var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")

var resultado = document.querySelector('span1')

function resultado1() {
    resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) 
}

//AQUI COMEÇA O CALCULO PARA MEDIA UM TAPETE REDONDO
var tr1 = document.querySelector('#tr1')
var pi = parseFloat(3,141592653)
var redondo = document.querySelector('span2')

function resultado2() {
    redondo.innerHTML =  ((pi * (parseFloat(tr1.value) * parseFloat(tr1.value))) / 4 )
}