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

instalar vscode-styled-components no VSCode para que se entenda sintaxe CSS dentro do arquivo Javascript.

Criar styles.js e nele importar styled from 'styled-components'.

Toda estilização vai ser escrita em formato javascript, mas utilizando sintaxe CSS.

Pode fazer encadeamento de estilos como SASS, para estilizar tags dentro de tags ex. tag small dentro da Title.

É possível também acessar propriedades do componente como no exemplo da aula, no caso de error. Pde escolher a cor no styles se error for true.

5`27`` props - para usar variáveis no CSS

Controle de propriedades CSS baseado em propriedades que o componente recebe. Acessa propriedades do componente.

# Estilos Globais

Estilos compartilhados na aplicação

Criar src/styles/global.js

importa a propriedade createGlobalStyle

Aqui o CSS aqui vai ser compartilhado com toda aplicação

#### antialised

usar !important

Propriedade antialised deixa as fontes mais definidas (usar !important)

em App.js usar o componente GlobalStyle

    import GlobalStyle from './styles/global'

#### fragments

Usar tags vazias - fragments <> </>. É usado para encapsular elementos sem produzir resultados na árvore de elementos

## Estilizando a página Main

Este projeto visa desenvolver uma aplicação que se conecta com a API Rest do Github para consumir informações que são os repositórios. O usuário poderá informar repositórios do github e a aplicação salavrá esses repositórios e poderá mostrar informações sobre eles.

Para isso é preciso criar um fromulário para que o usuário possa adicionar repositórios e uma listagem de repositórios.

Em pages/Main/index.js

Criar componente estilizado <Container> que vai permitir fazer alguns alinhamentos

Para colocar ícone do Github instalar react-icons que vem com pacote de fontes e ícones

    $ yarn add react-icons

Quando o estilo tiver mais de 2 níveis de encadeamento deve-se criar um componente estilizado.

O botão SubmitButton vai ter seu estilo modificado baseado em algumas propriedades por ex. enquanto a reuisição estiver sendo feita, o botão fica apagado (propriedade: disabled)

#### Passar propriedades através do CSS

9`45``

No exemplo em vez de passar type="text" do SubmitButton na própria tag, pode passar por dentro do estilo.

Em pages/Main/styles.js, em SubmitButton -> attrs({ })

## Adicionando repositórios

Objetivo: Quando o usuário digitar o nome de um repositório válido, as informações do repositório vão ser buscadas na API do github e vão ser salvas no state do componente.

Transformar o componente Main em formato de classe e poder torná-lo um statefull component.

No state vai armazenar os dados do input conforme o usuário for preenchendo (que são os dados do novo repositório que o usuário quer adicionar) - newRepo.

O valor do input terpa que ser armazenado dentro da variável newRepo.

A função handleSubmit recebe um preventDefault pq ela está vinculada a um formulário e formulário dá refresh na página.

#### chamar a API do github que vai retornar os dados do repositório digitado no input

2`12``

O endereço https://api.github.com/repos/rocketseat/unform vai retornar todas as informações do repositório

#### Várias formas de se consumir a API

3`12``

É possível consumir a API com uso do 'fecth'. Mas na aula está usando uma biblioteca auxiliar pq o fecth não permite usar uma base_URL

Biblioteca Axios

    $ yarn add axios

Criar src/services/api.js

Com a api importada src/Main/index.js é possível fazer a chamada em handleSubmit() - usar async/await

Agora já possível pegar as informações do repositório.

## Adicionando repositórios

Objetivo: Quando o usuário digitar o nome de um repositório válido, as informações do repositório vão ser buscadas na API do github e vão ser salvas no state do componente.

Transformar o componente Main em formato de classe e poder torná-lo um statefull component.

No state vai armazenar os dados do input conforme o usuário for preenchendo (que são os dados do novo repositório que o usuário quer adicionar) - newRepo.

O valor do input terpa que ser armazenado dentro da variável newRepo.

A função handleSubmit recebe um preventDefault pq ela está vinculada a um formulário e formulário dá refresh na página.

#### chamar a API do github que vai retornar os dados do repositório digitado no input

2`12``

O endereço https://api.github.com/repos/rocketseat/unform vai retornar todas as informações do repositório

#### Várias formas de se consumir a API

3`12``

É possível consumir a API com uso do 'fecth'. Mas na aula está usando uma biblioteca auxiliar pq o fecth não permite usar uma base_URL

Biblioteca Axios

    $ yarn add axios

Criar src/services/api.js

Com a api importada src/Main/index.js é possível fazer a chamada em handleSubmit() - usar async/await

Agora já possível pegar as informações do repositório.

#### Armazenar as informações

6`20`` As informações serão armazenadas na função handleSubmit, no objeto const data = {}. Primeiramente só vai armazenar o nome.

    this.setState({
      repositories: [ ... repositories, data]
    })

Aqui, sempre que o usuário adicionar um novo repositório, ele vai manter a listagem atual de repositórios (... repositories) por causa do conceito de imutabilidade do React (então é preciso criar um novo array, baseado no array repositories que já existe no state) e adicionar as novas informações (data).

Testando 8`10`` - verificar na aba React no console do chrome e procurar o Main que mostra o state com o nome do repositório.

Agora já está concluído o processo de adição de um novo repositório.

#### desabilitar o botão de adicionar enquanto o repositório está sendo adicionado

Adicionar propriedade loading dentro do state e em handleSubmit, antes de começar a fazer a chamada da API, this.setState({ loading: true }) e loading: false no this.setState referente a quando termina este processo.

Passar a propriedade loading no submitButton

Agora o styled components consegue acessar a propriedade loading={loading} para mostrar o sinal de loading ou fazer qualquer outra alteração.

#### Estilizar o botão SubmitButton no styles.js

9`50`` estilizar o botão quando estiver disabled - &(disabled)

acessar as propriedades do elemento em attrs() por meio de props, setando a propriedade disabled baseada na propriedade loading. Quando loading for true, a propriedade disabled fica true; qdo loading for false, a propriedade disabled fica false.

Para testar é só adicionar um repositório novo e ver se o botão fica cinza e desabilitado durante o processo.

#### colocando sinal de carregamento

12`00``
No Main, importar ícone do react-icons - faSpinner e fazer animação por dentro do styled component para a bolinha girar

No JSX do Main, fazer verificação colocando spinner no lugar do ícone faPlus no SubmitButton.

#### React Conditional Rendering

12`43`` utilizando um ternário dentro das tags SubmitButton

13`50`` efeito de girar

Importar no styled components 2 propriedades - keyframes e css

const rotate para criar a animação
