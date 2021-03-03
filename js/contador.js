var url = window.location.href
var captured = /dataFinal=([^&]+)/.exec(url)[1].replace('%2F', "/").replace('%2F', "/")
var result = captured ? captured : 'dataFinal'

let parseData = result.split("/")
let dataFinal = new Date(+parseData[2], parseData[1] - 1, +parseData[0]).getTime()

const startContador = function() {

        let x = setInterval(function() {
        let dataAtual = new Date().getTime()

        let distanciaEntreDatas = dataFinal - dataAtual

        let dias = Math.floor(distanciaEntreDatas / (1000 * 60 * 60 * 24))
        let horas = Math.floor((distanciaEntreDatas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutos = Math.floor((distanciaEntreDatas % (1000 * 60 * 60)) / (1000 * 60))
        let segundos = Math.floor((distanciaEntreDatas % (1000 * 60)) / (1000))

        document.getElementById("dias").innerHTML = dias
        document.getElementById("horas").innerHTML = horas
        document.getElementById("minutos").innerHTML = minutos
        document.getElementById("segundos").innerHTML = segundos

        if (distanciaEntreDatas < 0) {
            clearInterval(x)
        }
    }, 1000)
}
