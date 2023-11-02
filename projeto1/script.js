function soma(value) {
    let preco = parseFloat(document.querySelector('#preco').textContent)

    let qtd = (document.querySelector('#qtd').textContent)

    let valor = preco * qtd
    if(value === 1 ){
       document.querySelector('#qtd').textContent[1] = 2
    }

}