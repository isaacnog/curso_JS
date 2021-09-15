var idade = 89 

console.log(`Você está com ${idade} anos de idade`)
if (idade < 16) {
    console.log('Você ainda não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('O voto opcional')
}else if (idade >= 18) {
    console.log('O voto obrigatório')
}