# Bootcamp Rocketseat modulo05

## Projeto com React

```
$ yarn create react-app

```

Já vem com Babel e Webpack configurados
O Webpack e o Babel estão em react-scripts (v. package.json)

Em package.json

```
 "scripts": {
    "start": "react-scripts start", -> ambiente de desenvolvimento
    "build": "react-scripts build", -> ambiente de produção
    "test": "react-scripts test", -> rodar os testes
    "eject": "react-scripts eject"-> Para configurar Babel e Webpack se quiser configurar do zero
  }

```

- Deletar configurações do EsLint para configurá-lo do zero;

- Deletar arquivo manifest.json;

- Os arquivos da pasta src já vêm configurados por padrão;

  \$ yarn start

Roda a aplicação em localhost:3000

Deletar da pasta src:

- app.css
- app.test.js
- index.css
- logo.svg
- serviceWorker.js

Em index.js

- remover as partes do serviceWorker;
- a importação do CSS;

Em App.js

- remover a logo e o CSS;

## ESLint, Prettier & EditorConfig

- Botão direito e escolher Generate .editorconfig
- Trocar os falses p true e add end_of_line = lf

      $ yarn add eslint -D

      $ yarn eslint --init

Selecionar To check syntax, find problems, and enforce code style
e depois as seguintes que já aparecem selecionadas

? Would you like to install them now with npm? escolher Yes
? Does your project use TypeScript? (y/N) N (escolher Não)
Y para o resto

Vai instalar todas as bibliotecas

Remover package-lock.json e rodar

     $ yarn

Para atualizar as dependências em yarn.lock

Instalar dependências

Exceto babel-eslint como está no vídeo. Isso pq ele já vem no react-scripts
Então o comando correto fica desse jeito:

\$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

Fazer as modificações em .eslintrc.js

Salvar e criar arquivo .prettierrc na raiz

O prettier deixa o código mais bonito e o EsLint procura por erros

Para rodar o servidor:

```
$ yarn start

```

## Roteamento no React

Para fazer roteamento no front end da aplicação

\$ yarn add react-router-dom

Em src criar arquivo routes.js

criar pasta pages na raiz do projeto e nela a pasta main com index.js dentro

criar pasta Repository na raiz do projeto e nela também index.js dentro

Criar componentes nos index das pasta main e repository

---- com o snnipet da rockeseat é só digitar rfc para fazer um componente

#### routes.js

Fazer imports em router.js

em routes.js vai exportar por default um componente chamado Routes, cujo retorno vão ser as rotas (cada rota vai ser um componente)

O Switch vai garantir q uma rota seja chamada por vez.

Dentro do Switch, cada Route representa uma página da aplicação.

Importar o componente de rotas no App.js, que é o componente raiz da aplicação.

yarn start para rodar o server

aqui Main já deve aparecer em localhost:3000

e Repository aparecer em localhost:3000/repository
