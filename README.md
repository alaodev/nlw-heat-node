# NLW Heat Node

![GitHub repo size](https://img.shields.io/github/repo-size/alaodev/nlw-heat-node?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/alaodev/nlw-heat-node?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/alaodev/nlw-heat-node?style=for-the-badge)
<img src="https://img.shields.io/static/v1?label=Overview&message=alaodev&color=f8efd4&style=for-the-badge&logo=GitHub">

<br/>

<img height="50" src="./assets/images/nlw_logo.png" id="nlw_heat_node" alt="exemplo imagem">

<br/>
<br/>

> Project developed at the Next Level Week Heat event held by Rocketseat. This project aims to build the backend of a commenting application. Applied technologies: NodeJS, TypeScript, Prisma ORM and Socket.io.

<br/>

## Applied technologies

<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Typescript"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="Nodejs"/></code>
<code><img height="32" src="https://avatars.githubusercontent.com/u/17219288?s=280&v=4" alt="Prisma ORM"/></code>
<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="Prisma ORM"/></code>

<br/>

## Requirements

Before starting, make sure you have met the following requirements:
* Node version 14.17.6 or greater;
* Yarn or NPM;
* Git.

<br/>

## How to Run

To run the project, follow these steps:

Go to the directory where you want to clone the project and run:
```
git clone https://github.com/alaodev/nlw-heat-node.git
```

Then: 
```
cd nlw-heat-node
```

Now:
```
yarn or npm i // To install de dependencies.
```

To create the database schemas, run the command and then give a name to your migration:
```
yarn prisma migrate dev or npm prisma migrate dev
```

Finally, execute:
```
yarn dev or npm run dev
```

By default, aplication will start to run on port 3000. You can easily change the port accessing the file /src/server.ts:
```js
import { serverHttp } from "./app";

const PORT = 3000;

serverHttp.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
```


[⬆ Back to the top](#nlw_heat_node)<br>