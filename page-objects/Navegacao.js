export class Navegacao {

    constructor(page) {
        this.page = page
        this.contadorItens = page.locator('[data-qa="header-basket-count"]')
        this.linkCheckout = page.getByRole('link', { name: 'Checkout' })
    }

    contandoItens = async () => {

        await this.contadorItens.waitFor()
        const apenasNumeros = await this.contadorItens.innerText()
        return parseInt(apenasNumeros, 10)



    }

    vaiParaCheckout = async () => {
        await this.linkCheckout.waitFor()
        await this.linkCheckout.click()
        await this.page.waitForURL("http://localhost:2221/basket")
    }




}