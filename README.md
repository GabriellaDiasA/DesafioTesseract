<h1 align="center">
  Desafio Tesseract 🟪
  <br>
</h1>

## O Desafio

Criar uma página interativa que contenha detalhes relevantes sobre cada membro do time Tesseract.
A lista com os atuais membros deve ser carregada dinamicamente atravez da API do github e ao clicar
cada membro deve exibir informações sobre o membro clicado: nome, quantidade de repositórios,
quantidade de seguidores, data em que a pessoa se cadastrou no GitHub.

## O Projeto

Essa página foi criada utilizando a biblioteca/framework React JS. O README padrão React se encontra ainda
aqui neste mesmo, após o detalhamento do projeto. É uma página única, tal como é comum com aplicativos
React, que utiliza React Hooks para salvar estados e preservar a dinamicidade e responsividade da página.

O processo de desenvolvimento foi MOBILE-FIRST, o que significa que antes foram pensadas soluções para
problemas de exibição mobile, e depois adaptadas as mesmas ao contexto não-mobile.

## Componentes

### Header

O header contém o título da página e a barra de filtro. O título, como uma parte muito importante da página,
foi passado direto de uma das camadas mais altas do projeto (App.js) além de ter sido configurada como
necessariamente um string e requerido.

### Filter Bar

A barra de filtro foi a última funcionalidade a ser implementada, pois precisava de itens prontos para
efetuar a tal filtragem. A solução encontrada foi dobrar a lista de membros como membersDefault e utilizar
a lista members como uma versão já filtrada da lista base membersDefault. Claramente não é a solução mais
eficiente, mas foi extremamente simples de implementar.

### Tesseract

Esse é o componente central da página, onde os itens que representam cada membro do time se situam. O componente
filho `<Member />` é carregado dinamicamente atravez do `Array.prototype.filter` que possibilita casar IDs
compatíveis para que cada membro tenha os detalhes próprios carregados em suas respectivas divs.

### Member

O componente `<Member />` é interativo por meio de um click, que acrescenta ou remove uma classe css especial
que controla a propriedade width e exibe ao lado as informações extras (requerimento funcional do desafio).

### Footer

Ainda não utilizado! É sempre bom ter espaço para novas funcionalidades.


## App.js

O coração do aplicativo. Contém 8 hooks e 2 funções

### input

O hook input trata dos inputs do usuário na barra de filtro.

### repos

Trata a lista de repositórios, tendo como chave o ID equivalente do hook `membersDefault`

### followers

Trata a lista de seguidores de cada membro, também utilizando o ID como chave.

### createDate

Trata a lista de datas de criação das contas do github de cada membro.

### isLoading

Serve para saber se a página já terminou de carregar todos os dados relevantes, pois interagir com a página enquanto
os hooks `input`, `repos`, `followers` e `createDate` ainda não foram preenchidos pode quebrar tudo. Sim, tudo.
Vale notar que a variável isLoading é inicializada com valor `true` e só passa a ter valor `false` quando TODOS os
requerimentos `fetch` (utilizando async e await) terminam.

### members

A lista que contém inúmeros dados sobre as contas de github dos membros do time Tesseract, após a filtragem. Essa lista
é a que acaba sendo, de fato, usada para gerar elementos HTML e texto na página.

### membersDefault

A lista que contém tudo da `members` SEM filtragem. Serve como comparação para gerar a lista `members` dinâmicamente
atravez de inputs do usuário na barra de filtragem.

### FETCH

Aqui explicarei o porquê de ter separado os dados dos membros em quatro listas diferentes. Primeiramente, o hook useEffect
para carregar os primeiros dados (o primeiro `fetch` da função `fetchData()`) só deve acontecer uma vez: ao carregar a página.
Logo, como fazer mais operações `fetch` é inevitável dada a estrutura de dados da API do github, seria impossível editar
cada entrada da lista de membros sem gerar uma dependência.

Outro ponto relevante é que a própria API do github é estruturada dessa forma, logo o modelo criado aqui preserva o modelo
da API e então o código se torna mais fácil de adaptar a qualquer possível mudança à API em si.

### toggleSelection

Uma função simples que dita o comportamento de seleção dos componentes `<Member />`, a fim de exibir os dados relevantes.

### updateInput

A função dinâmica e assíncrona que controla os inputs do usuário e os utiliza para filtrar a lista `members` a partir da lista
base `membersDefault`

## index.css

Escolhi escrever o css inteiro a mão pois imaginei que seria pouca coisa e simplificaria a estilização dos componentes, dos textos
e elementos em geral. No final das contas passei aproximadamente uma hora editando o arquivo. É possível que uma implementação, por
exemplo, de bootstrap js tornasse o processo de estilização mais ágil, mas acho improvável. Utilizei algumas media queries para
que o container geral do aplicativo não crescesse sem limite e fazer pequenos ajustes de tamanho da fonte do título.

# Agradecimento

Finalmente, gostaria de agradecer à Tesseract por possibilitar esse projeto que já foi em si só uma grande oportunidade de
aprendizado para mim.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
