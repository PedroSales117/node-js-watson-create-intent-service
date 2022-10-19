# Watson Create Intent Service

<details><summary>Instalação</summary>
Primeiro você irá clonar esse repositorio em sua maquina local, o que pode ser feito por esse comando:

`git clone https://gitlab.sicredi.net/sales_pedro/watson-create-intent-service`

Após clonar o repositorio em uma pasta de sua escolha em seu computador local você irá instalar as dependencias necessarias para o projeto ser executado coom este comando:

`npm install`

</details>
<details><summary>Utilização</summary>

Antes de realizarmos quaisquer chamadas para a nossa API primeiro precisamos iniciar o servidor, por padrão ele será iniciado na porta 8080, para fazer isso rode esse comando dentro da pasta do projeto:

`npm start`

O resultado do comando acima deve ser este:

`listening http://localhost:8080`

Agora em alguma ferramenta que possa realizar requisições `POST` (recomendo [postman](https://www.postman.com/downloads/)) você irá informar via `BODY` o **nome** e o **titulo** de sua intenção deste modo:

```json
{
  "intent": {
    "name": "nome_da_intencao",
    "examples": "exemplos,separados,por,virgula"
  }
}
```

O retorno será um arquivo `CSV` que você poderá baixar:

```txt
exemplos,nome_da_intencao
separados,nome_da_intencao
por,nome_da_intencao
virgula,nome_da_intencao
```

> Você também pode acessar a pasta _intents_ dentro do projeto e você verá todos os seus arquivos CSVs de intenções criados e prontos para serem levados para sua workspace do Watson.
</details>

Para quaisquer duvidas você pode me contatar via _sales_pedro@terceiros.sicredi.com.br_ ou _pedro.sales@compasso.com.br_.

Espero que esse projeto te ajude!!
