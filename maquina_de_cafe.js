function maquinaDeCafe(pedidoCafe){
    const pedidoCafeCurto = "Café curto"
    const pedidoCafeLongo = "Café longo"
    const pedidoCafeComLeite = "Café com leite"
    const pedidoCappuccino = "Cappuccino"
    const pedidoChocolate = "Chocolate"
    const pedidoLeite = "Leite quente"
    const pedidoCha = "Chá quente"
    const pedidoAguaQuente = "Água quente"
            
            return {
                pedidoCafeCurto,
                pedidoCafeLongo,
                pedidoCafeComLeite,
                pedidoCappuccino,
                pedidoChocolate,
                pedidoLeite,
                pedidoCha,
                pedidoAguaQuente,
            }
}
const pedidos = maquinaDeCafe()
console.log("Você fez um pedido de: " + pedidos.pedidoCappuccino)



    