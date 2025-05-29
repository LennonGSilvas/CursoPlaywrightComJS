import {test, expect} from '@playwright/test'

test('PaginaDeProdutos', async ({page})=> {

    await page.goto("http://localhost:2221/");
    await expect(page).toHaveTitle('Art Shopping Store')

})