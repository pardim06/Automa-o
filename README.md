# 🛠️ Automação para Oficina dos Bits

Sistema de automação desenvolvido em **JavaScript** para otimizar a conferência de produtos na empresa **Oficina dos Bits**. Utilizando **Selenium WebDriver**, APIs e técnicas de visão computacional, a automação reduziu em **99,99% o tempo** anteriormente gasto nesse processo, trazendo mais agilidade e precisão à operação.

---

## 🚀 Objetivo

Automatizar a verificação de produtos listados em planilhas com os dados de sistemas internos e sites externos, detectando divergências automaticamente e gerando relatórios. A ferramenta foi criada para **reduzir o tempo de conferência manual**, eliminar erros humanos e acelerar a tomada de decisões.

---

## 🧰 Tecnologias Utilizadas

- 🟨 **JavaScript (Node.js)**
- 🌐 **Selenium WebDriver** — automação de navegador
- 🔍 **Tesseract.js** — leitura de texto (OCR)
- 📊 **ExcelJS / CSV-Parse** — leitura de planilhas
- 🔁 **Axios / Fetch** — integração com APIs REST
- 🧾 **PDFKit** — geração de relatórios em PDF
- 🖼️ **Jimp / Sharp** — processamento de imagem
- 📦 **Dotenv** — variáveis de ambiente

---

## ⚙️ Funcionalidades

- Login automático em sistemas internos via navegador
- Leitura de planilhas `.xlsx` e `.csv` com os produtos
- Extração de dados de sites ou sistemas usando Selenium
- Leitura de textos em imagens com OCR via Tesseract.js
- Comparação inteligente de dados com tolerância a erros
- Geração de relatórios em PDF com os produtos divergentes
- Envio automático de relatórios por e-mail (opcional)
- Registro de logs e erros para auditoria

🛡️ Segurança
Credenciais de acesso e tokens de APIs são armazenados de forma segura no arquivo .env, que não deve ser versionado.

📬 Possibilidades Futuras
Dashboard com interface web para visualizar divergências

Integração com bancos de dados (MongoDB, PostgreSQL)

Gatilhos automatizados por webhook ou filas

🙋‍♂️ Autor
Desenvolvido por Moisés Eduardo
