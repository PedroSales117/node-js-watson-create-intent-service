# Watson Create Intent Service

<details><summary>Instalação</summary>

`npm install`
</details>
<details><summary>Utilização</summary>

Em alguma ferramenta que possa realizar requisições `POST` (recomendo [postman](https://www.postman.com/downloads/)) você irá informar via `BODY` o **nome** e o **titulo** de sua intenção deste modo:

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
