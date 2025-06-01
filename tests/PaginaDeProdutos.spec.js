import { test} from '@playwright/test'
import { PaginaDeProdutos } from '../page-objects/PaginaDeProdutos'
import { Checkout } from '../page-objects/Checkout'
import { Navegacao } from '../page-objects/Navegacao'

test('PaginaDeProdutos', async ({ page }) => {

    //acessa a pagina
    const paginaProdutos = new PaginaDeProdutos(page)
    await paginaProdutos.acessaPaginaProdutos()

    //Adiciona os produtos 
    await paginaProdutos.adicionarProdutos(0)
    await paginaProdutos.adicionarProdutos(1)
    await paginaProdutos.adicionarProdutos(2)

    //Vai até a pagina do checkout
    const irAteCheckout = new Navegacao(page)
    await irAteCheckout.vaiParaCheckout()

    //Remove item com menor valor
    const checkout = new Checkout(page)
    await checkout.removeProdutoComMenorValor()
    await checkout.vaiParaPaginaFinalizarVenda()



})