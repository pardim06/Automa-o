require('dotenv').config()
const { Builder, By } = require('selenium-webdriver')
const { lerPlanilha } = require('./utils')
const { gerarRelatorio } = require('./relatorio')

async function main() {
  const produtos = await lerPlanilha('./data/produtos.xlsx')
  const divergencias = []

  const driver = await new Builder().forBrowser('chrome').build()

  for (const produto of produtos) {
    await driver.get(produto.url)
    const nomePagina = await driver.findElement(By.css('.nome')).getText()
    if (nomePagina !== produto.nomeEsperado) {
      divergencias.push({ esperado: produto.nomeEsperado, encontrado: nomePagina })
    }
  }

  await gerarRelatorio(divergencias)
  await driver.quit()
}

main()
