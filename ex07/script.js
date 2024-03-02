function verificar(){
    const valortxt = document.querySelector('input#numero');
    const data = new Date();
    const anoAtual = data.getFullYear();
    let anoNasc = Number(valortxt.value);
    let resultado = document.querySelector('.resultado');
    let sexo = document.getElementsByName('sexo')
    const dif = anoAtual - anoNasc
    let genero = ""
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoNasc == 0 || Number(anoNasc)> anoAtual){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        if (sexo[0].checked){
            genero = "Homem"
            if (dif >= 0 && dif < 10){
                img.setAttribute('src', 'img/bebe-masc.jpg')
            } else if (dif < 21){
                img.setAttribute('src', 'img/jovem-masc.jpg')
            } else if (dif < 50){
                img.setAttribute('src', 'img/adulto-masc.jpg')
            }else {
                img.setAttribute('src', 'img/idoso-masc.jpg')
            }
        }
        else if (sexo[1].checked){
            genero = "Mulher"
            if (dif >= 0 && dif < 10){
                img.setAttribute('src', 'img/bebe-fem.jpg')
            } else if (dif < 21){
                img.setAttribute('src', 'img/jovem-fem.jpg')
            } else if (dif < 50){
                img.setAttribute('src', 'img/adulta-fem.jpg')
            }else {
                img.setAttribute('src', 'img/idosa-fem.jpg')
            }
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${dif} anos`
        resultado.appendChild(img)
    }
}