import {test, expect} from '@playwright/test'

test('PaginaDeProdutos', async ({page})=> {

    //acessa a pagina
    await page.goto("http://localhost:2221/");
    await expect(page).toHaveTitle('Art Shopping Store')
    await page.pause()

    //Adiciona os produtos 
    const adicionarProdutos = page.locator('[data-qa="product-button"]').first()
    await adicionarProdutos.waitFor()
    await expect(adicionarProdutos).toHaveText('Add to Basket')
    await adicionarProdutos.click()
    await adicionarProdutos.waitFor()
    await expect(adicionarProdutos).toHaveText("Remove from Basket")

    //Vai até a pagina do checkout
    const acessaPaginaCheckout = page.getByRole('link', { name: 'Checkout' })
    await acessaPaginaCheckout.waitFor()
    await acessaPaginaCheckout.click()
    await page.waitForURL("http://localhost:2221/basket")

})