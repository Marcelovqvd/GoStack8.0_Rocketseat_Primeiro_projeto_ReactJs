# Bootcamp Rocketseat projetoReactJS

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

Navegar entre páginas via URL sem precisar recarrega-la totalmente. isso é SPA
Para fazer roteamento no front end da aplicação, instalar:

\$ yarn add react-router-dom

Em src criar arquivo routes.js

criar pasta pages na raiz do projeto e nela as pastas Main e Repository, ambas com o arquivo index.js dentro.
Os arquivos index.js vão ser componentes.

- /src/pages/Main/index.js
- /src/pages/Repository/index.js

---- com o snnipet da rockeseat é só digitar rfc para fazer um componente

#### routes.js

Instalar react-router-dom. Este vai

    $ yarn add react-router-dom

Criar o arquivo /src/routes.js

#### em routes.js

Importar BrowserRouter, Switch e Route do react-router-dom.

- BrowserRouter é um roteador e permite navegar entre as pages. As rotas ficam na URL.

- Switch garante que apenas uma rota seja chamada por vez (não várias ao mesmo tempo) pois o react-router-dom permite que sejam chamados mais de um componente ao mesmo tempo.

- Route - cada Route repreenta uma página da aplicação

Exportar componente Routes() cujo retorno são as rotas

Exportar por default um componente chamado Routes, cujo retorno vão ser as rotas (cada rota vai ser um componente)

Para path="/repository" chamar component={Repository}. aqui, o Repository é variável e por isso, deve ser colocada entre chaves.

Quando o usuário acessar a rota raiz, vai acessar a rota Main

Importar o componente de rotas no App.js, que é o componente raiz da aplicação.

localhost:3000 -> rota rais, página Main
localhost:3000/repository -> página Repository

O react-router-dom não procura por uma igualdade entre o path e a URL que o usuário digitou. Ele procura se a URL digitada no browser começa com o path "/" e a URL repository também começa com a barra "/". Então ele pararia na primeira rota que encontrar. Então deve-se usar o 'exact'

    <Route path="/" exact component={Main} />

Então, em Route path="/" usar "exact" para que essa rota só seja chamada quando se estiver extamente no caminho e não quando apenas começar a URL com "/".

criar

- src/Main/index.js

- src/Repository/index.js

yarn start para rodar o server

aqui Main já deve aparecer em localhost:3000

e Repository aparecer em localhost:3000/repository

# Styled Components

Configurar biblioteca Styled Components

    $ yarn add styled-components

Vai mudar a forma de como se escreve CSS. Com essa biblioteca o CSS de um componente não vai ser compartilhado com outros componentes, a não ser quer se queira.

instalar vscode-style-components no VSCode

Criar styles.js e nele importar styled from 'styled-components'.

Toda estilização vai ser escrita em formato javascript, mas utilizando sintaxe CSS.

Pode fazer encadeamento de estilos como SASS

5`27`` props - para usar variáveis no CSS

Controle de propriedades CSS baseado em propriedades que o componente recebe. Acessa propriedades do componente.

# Estilos Globais

styles/global.js

importa a propriedade createGlobalStyled

Aqui o CSS aqui vai ser compartilhado com toda aplicação

#### antialised

usar !important

Propriedade antialised deixa as fontes mais definidas.

em App.js usar o componente GlobalStyle

    import GlobalStyle from './styles/global'

#### fragments

Usar fragments <> </>. É usado para encapsular elementos sem produzir resultados na árvore de elementos
