function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >=0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'h-crianca.png')
      } else if (idade < 21) {
          //Adolescente
          img.setAttribute('src', 'h-adolescente.png')
      } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'h-adulto.png')
      } else {
          //Idoso
          img.setAttribute('src', 'h-idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //Criança
          img.setAttribute('src', 'm-crianca.png')
    } else if (idade < 21) {
        //Adolescente
          img.setAttribute('src', 'm-adolescente.png')
    } else if (idade < 50) {
        //Adulto
          img.setAttribute('src', 'm-adulta.png')
    } else {
        //Idoso
          img.setAttribute('src', 'm-idosa.png')
    }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}