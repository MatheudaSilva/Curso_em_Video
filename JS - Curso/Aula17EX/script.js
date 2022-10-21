var num = document.getElementById('num')
var lista = document.getElementById('number')
let res = document.getElementById('res')
let valores = []

function Inum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function Ilista(n, L){
    if(L.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicao()
{
    if(Inum(num.value) && !Ilista(num.value, valores)){ // a "!" significa "não"
        valores.push(Number(num.value))
        var item = document.createElement('option')
        alert(`Valor ${num.value} adicionado com sucesso`)
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Valor inválido ou já presente na lista')
    }
    num.value = ""
    num.focus() // usado para, após apagar um valor, continuar selecionado para digitar outro

}

function Finalizar(){
    if(valores.length == 0)
    {
        alert('Por favor, adicione um valor')
    }
    else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            {
                maior = valores[pos]
            }
            if(valores[pos] < menor)
            {
                menor = valores[pos]
            }
            media = soma/tot
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando os valores, temos ${soma}</p>`
        res.innerHTML += `<p>Calculando a média do valores, temos ${media}</p>`
        
    }
}