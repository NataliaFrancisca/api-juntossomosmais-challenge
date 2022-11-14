# NodeJS API - Juntos Somos Mais

Essa API foi criada para poder ser utilizada no desafio de Front-end da empresa Juntos Somos Mais. 

É uma API bem simples, onde é possível fazer a consulta de todos os items, ou de um item único.

A API está se baseando nessa lista de dados: https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json

## Stack utilizada

- Node.js;
- Express;

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/NataliaFrancisca/api-juntossomosmais-challenge
```

Entre no diretório do projeto

```bash
  cd api-juntossomosmais-challenge
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Documentação da API

#### Retorna todos os itens

```http
  GET /members
```

#### Retorna um item

```http
  GET /members/${email}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O e-mail do item que você quer |


*Como os items não tem ID, usei o e-mail como identificador único*