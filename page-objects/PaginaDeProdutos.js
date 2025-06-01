import { expect } from "@playwright/test";
import { Navegacao } from "./Navegacao";

export class PaginaDeProdutos {
    constructor(page) {
        this.paginaProdutos = page
        this.botaoAdicionarProduto = page.locator('[data-qa="product-button"]')
    }

    acessaPaginaProdutos = async () => {
        await this.paginaProdutos.goto("http://localhost:2221/");
        await expect(this.paginaProdutos).toHaveTitle('Art Shopping Store')


    }

    adicionarProdutos = async (index) => {

        const botaoProdutos = this.botaoAdicionarProduto.nth(index)
        await botaoProdutos.waitFor()
        await expect(botaoProdutos).toHaveText('Add to Basket')

        const contarItens = new Navegacao(this.paginaProdutos)

        const itensAntesDoClick = await contarItens.contandoItens()
        await botaoProdutos.click()
        await expect(botaoProdutos).toHaveText("Remove from Basket")

        const itensDepoisDoClick = await contarItens.contandoItens()
        expect(itensDepoisDoClick).toBeGreaterThan(itensAntesDoClick)


    }




}