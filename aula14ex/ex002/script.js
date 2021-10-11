function tabuada() {

    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Ta faltando número ai man')
    } else {
        var num = Number(numero.value)
        tabuada.innerHTML = ''

        for(var count = 0; count <= 10; count++) {
            var item = document.createElement('option')
            item.text = `${num} x ${count} = ${num*count}`
            tabuada.appendChild(item)
        }
    }
}