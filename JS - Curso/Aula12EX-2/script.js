function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        alert('Está faltanod algum dado')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', './ImgP/Chomem.png')
            }
            else if(idade < 21)
            {
                // jovem
                img.setAttribute('src', './ImgP/Jhomem.png')
            }
            else if(idade < 50){
                // adulto
                img.setAttribute('src', './ImgP/Ahomem.png')
            }
            else{
                // idoso
                img.setAttribute('src', './ImgP/Ihomem.png')
            }
        }
        else{
            genero = 'mulher'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', './ImgP/Cmulher.png')
            }
            else if(idade < 21)
            {
                // jovem
                img.setAttribute('src', './ImgP/Jmulher.png')
            }
            else if(idade < 50){
                // adulta
                img.setAttribute('src', './ImgP/Amulher.png')
            }
            else{
                // idosa
                img.setAttribute('src', './ImgP/Imulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que, o gênero, é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}