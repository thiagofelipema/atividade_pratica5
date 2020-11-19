function calculaPromocao(){
    var produto = document.getElementById('produto').value
    var preco = parseFloat(document.getElementById('preco').value)
    var valor_da_promo = preco / 2

    document.getElementById('resposta_produto').innerHTML = produto + " - Promoção: Leve 3 por: R$ " + ((preco * 2) + valor_da_promo).toFixed(2)
    document.getElementById('resposta_promo').innerHTML = "O 3º produto custará apenas: R$ " + valor_da_promo.toFixed(2)
}


var verpromo = document.getElementById('mostrar_promo')
verpromo.addEventListener('click', calculaPromocao)