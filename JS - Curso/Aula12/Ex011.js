var idade = 43
console.log (`Você tem ${idade} anos`)
if(idade < 16 ){
    console.log('Não pode votar')
}
else if(idade < 18 || idade > 66 ){
    console.log('O voto é opcional')
}
else{
    console.log('O voto é obrígatório')
}