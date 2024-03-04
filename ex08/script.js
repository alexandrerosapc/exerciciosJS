function contar(){
    let resultado = document.querySelector('.resultado');
    let i = document.querySelector('input#inicio');
    let valorInicial = Number(i.value);
    let f = document.querySelector('input#fim');
    let valorFinal = Number(f.value);
    let p = document.querySelector('input#passo');
    let valorPasso = Number(p.value);
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        resultado.innerHTML = `Impossível calcular`
    }else{
        if (valorPasso === 0){
            alert ("O passo não pode ser igual a 0. Irei mudar o valor para 1")
            valorPasso = 1
        } 
        resultado.innerHTML = `Contando:<br>`
        if (valorInicial < valorFinal){
            for (let c = valorInicial; c <= valorFinal; c+= valorPasso){
                resultado.innerHTML += `${c} `
            }
        }else {
            for (let c = valorInicial; c >= valorFinal; c-= valorPasso){
                resultado.innerHTML += `${c} `
            }
        }
    }
       
}