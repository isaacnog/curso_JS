var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)

if (hora >= 6 && hora < 12) {
    console.log('Bom dia, man!!!')
}else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes, muchacho')
}else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite, garelinha')
}else if (hora >= 1 && hora < 6) {
    console.log('Vai dormir, cara')
}else {
    console.log('Pera la né parça. Ai não')
}