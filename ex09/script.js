function gerarTabuada(){
    let valortxt = document.querySelector('#valor');
    let valor = Number(valortxt.value);
    let tabuada = document.querySelector('#tabuada');
    if (valortxt.value.length == 0){
        alert("Por favor, digite um número");
        tabuada.innerHTML = `<option value="Digite um número acima">Digite um número acima</option>`
    }
    else{
        tabuada.innerHTML = ''
        for (let c = 0; c <= 10; c++){
            let resultado = valor * c;
            let item = document.createElement('option');
            item.text = `${valor} x ${c} = ${resultado}`;
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}