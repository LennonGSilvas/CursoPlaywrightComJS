import { expect } from "@playwright/test"

export class Checkout {
    constructor(page) {
        this.page = page
        this.cardsProdutos = page.locator('[data-qa="basket-card"]')
        this.precosProdutos = page.locator('[data-qa="basket-item-price"]')
        this.botaoRemover = page.locator('[data-qa="basket-card-remove-item"]')
        this.botaoParaFinalizar = page.locator('[data-qa="continue-to-checkout"]')
    }

    removeProdutoComMenorValor = async () => {

        await this.cardsProdutos.first().waitFor()
        const itensAntesdeRemover = await this.cardsProdutos.count()
        await this.precosProdutos.first().waitFor()
        const todosOsValores = await this.precosProdutos.allInnerTexts()


        const apenasNumeros = todosOsValores.map((valores) => {
            const tiraOsSinaisDollars = valores.replace("$", "")
            return (tiraOsSinaisDollars, 10)


        })

        const menorValor = Math.min(...apenasNumeros)
        const menorValorIdx = apenasNumeros.indexOf(menorValor)
        const removerProdutos = this.botaoRemover.nth(menorValorIdx)
        await removerProdutos.waitFor()
        await removerProdutos.click()
        await expect(this.cardsProdutos).toHaveCount(itensAntesdeRemover - 1)
        
    }

    vaiParaPaginaFinalizarVenda = async () =>{

        await this.botaoParaFinalizar.waitFor()
        await this.botaoParaFinalizar.click()
        await this.page.waitForURL(/\/login/, {timeout:3000})



    }

}