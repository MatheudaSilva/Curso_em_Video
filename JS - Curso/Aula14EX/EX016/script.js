function contar(){
    var Ic = document.getElementById('Ic')
    var Fc = document.getElementById('Fc')
    var Pc = document.getElementById('Pc')
    let resu = document.getElementById('resu')
    if(Ic.value.length == 0 || Fc.value.length == 0 || Pc.value.length == 0 ){
        resu.innerHTML = 'Impossível contar'
        alert("Preencha os dados para que possa contar")
    }
    else {
        resu.innerHTML = 'Contando: <br>'
        let i = Number(Ic.value)
        let f = Number(Fc.value)
        let p = Number(Pc.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo como 1')
            p = 1
        }
        if(i < f){ // contagem crescente
            for(var c = i; c <= f; c += p ){
            resu.innerHTML += `${c} \u{1F449}`
        }
        }
        else{ // contagem decrscente
            for(var c = i; c >= f; c -= p ){
                resu.innerHTML += `${c}\u{1F449}`
            }

        }
        resu.innerHTML += `\u{1F3C1}`
    }
}