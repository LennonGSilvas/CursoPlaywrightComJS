import { test, expect } from '@playwright/test'
import { PaginaDeProdutos } from '../page-objects/PaginaDeProdutos'

test('PaginaDeProdutos', async ({ page }) => {

    //acessa a pagina
    const paginaProdutos = new PaginaDeProdutos(page)
    await paginaProdutos.acessaPaginaProdutos()

    //Adiciona os produtos 
    await paginaProdutos.adicionarProdutos(0)
    await paginaProdutos.adicionarProdutos(1)
    await paginaProdutos.adicionarProdutos(2)

    //Vai até a pagina do checkout
    const acessaPaginaCheckout = page.getByRole('link', { name: 'Checkout' })
    await acessaPaginaCheckout.waitFor()
    await acessaPaginaCheckout.click()
    await page.waitForURL("http://localhost:2221/basket")

})