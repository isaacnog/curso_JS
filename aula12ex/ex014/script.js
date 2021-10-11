function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minutes = date.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`
    
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e0b85e'
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#7295b2'
    }else if (hora >=18 && hora < 24) {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#302e2f'
    }else if (hora >= 0 && hora < 6) {
        img.src = 'fotomadrugada.png'
    }
}


