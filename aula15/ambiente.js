let num = [1, 2, 3, 6, 5, 4]

num[6] = 7

num.push(8)

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1) { 
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}
