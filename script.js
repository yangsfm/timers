//setInterval

function acao() {
    document.write("Executando... <br>")
}

// var timer = setInterval(() => {
//     document.write("Executando!!! <br>")
// }, 1000)

setTimeout(acao, 3000);

var timer = setTimeout(() => {
    console.log("EXECUTOOU NOSSO TIMEOUT")
}, 3000)