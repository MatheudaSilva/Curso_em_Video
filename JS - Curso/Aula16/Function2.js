function soma(n1, n2, res)
{
    res = n1 + n2 
    if(res % 2 == 0){
        return "O número é par!"
    }
    else{
        return "O número é ímpar!"
    }
}

console.log(soma(3,2))
