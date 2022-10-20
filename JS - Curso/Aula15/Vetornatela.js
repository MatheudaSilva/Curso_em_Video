let valores = [8, 1, 3 ,9 ,10, 0]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(var pos = 0; pos < valores.length; pos++) // var pos usada, enquanto os tamanhos da var valores, acrescenta +1 a pós
{
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){ // para = "for" cada posição = "let pos" dentro = "in" de valores = "var valores"
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}