function carregar(){
    let msg = document.querySelector('.horario');
    let imagem = document.querySelector('.img');
    let data = new Date();
    let hora = data.getHours();
    let titutlo = document.querySelector('h1');
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12){
        titutlo.innerHTML = `Bom Dia`
        imagem.innerHTML ="<img src ='img/manhã-250.png'>"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        titutlo.innerHTML = `Boa Tarde`
        imagem.innerHTML ="<img src ='img/tarde-250.png'>"
        document.body.style.background = '#d6ded6'
    } else{
        titutlo.innerHTML = `Boa Noite`
        imagem.innerHTML ="<img src ='img/noite-250.png'>"
        document.body.style.background = '#343c44'
    }
}