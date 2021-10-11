let valores = [6 ,8 ,9 ,5 ,4 ,3 ,7 ,1 ,2]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} é igual a ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


