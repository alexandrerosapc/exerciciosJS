let valor = document.querySelector('#valor');
let lista = document.querySelector('#lista');
let resultado = document.querySelector('.resultado')
let valores = []


function isNumeroValido(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumeroValido(valor.value) && !inLista(valor.value, valores)){
        let item = document.createElement('option');
        item.text = `Valor ${valor.value} foi adicionado`;
        item.value = `tab${valor.value}`;
        lista.appendChild(item);
        valores.push(Number(valor.value));
        resultado.innerHTML = ''
    }else {
        alert('Valor Inválido ou já encontrado na lista!');
    }
    valor.value = ''
    valor.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert("erro")
    }else{
        let total = valores.length
        let maior = valores [0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]
            
        }
        let media = soma/total
        

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>Somando todos os valores, temos: ${soma} </p>
        <p>A média dos valores digitados é ${media}</p>`
    }
}

