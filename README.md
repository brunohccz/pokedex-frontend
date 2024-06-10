# Pokedex React

Este é um projeto de aplicação web que utiliza React, TypeScript e Vite. A aplicação consome uma API de Pokédex e apresenta os dados em um formato amigável ao usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Configuração do Projeto

1. Clone o repositório para a sua máquina local.

2. Instale as dependências do projeto. No diretório raiz do projeto, execute o seguinte comando:

```sh
npm install
```

1. Configure as variáveis de ambiente no arquivo [`.env`](.env) conforme necessário.

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- [`src/`](src/): Diretório principal do código-fonte.
  - `api/`: Contém a lógica para a comunicação com a API.
  - `components/`: Contém os componentes React reutilizáveis.
  - `hooks/`: Contém os hooks personalizados do React.
  - `layouts/`: Contém os layouts da aplicação.
  - `pages/`: Contém as páginas da aplicação.
  - `routes/`: Contém as rotas da aplicação.
  - `styles/`: Contém os estilos globais da aplicação.

## Build

Para buildar a aplicação para produção, use o seguinte comando:

```sh
npm run build
```

O código de produção estará disponível no diretório [`dist/`](dist/).
