function count() {
    var inicio = document.getElementById('ininumber')
    var final = document.getElementById('finnumber')
    var passos = document.getElementById('pasnumber')
    var resultado = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var ini = Number(inicio.value)
        var fim = Number(final.value)
        var step = Number(passos.value)

        if(step <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            step = 1
        }

        if(ini < fim) {    
            for(var count = ini; count <= fim; count += step) {
                resultado.innerHTML += `${count} \u{1F449} `
            }
        }else{
            for(var count = ini; count >= fim; count -= step) {
                resultado.innerHTML += `${count} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
