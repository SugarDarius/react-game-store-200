# React Game Store - 200
The practical work of the Sfeir School React 200

![SfeirLogo](https://github.com/SugarDarius/react-game-store-200/blob/master/src/images/sfeir-logo.png)

## Table of Contents (Optional)

- [Getting Started](#installation)
- [Practical Work](#practical-work)
- [API](#api)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Getting Started

These are the instructions to run the project.

### Prerequisites

*  **NodeJS** version >= 10.13.x
*  **NPM** version >= 6.7.x

### Installing

#### Clone the project: 

```shell
git clone https://github.com/SugarDarius/react-game-store-200.git
```

#### Installing dependencies: 

This project is build wih nodejs.\
You need to install the node modules with the following command : 

```shell
npm install 
```

### Running in development

These are differents commands availables for the project.

#### Start the project entirely  

```shell
npm run develop
```

> Running the 3 commands below

#### Serving the API

```shell
npm run develop:api:serve
```


#### Serving the front server

```shell
npm run develop:server:serve
```
#### Building and server the client (bundled with webpack the React app)

```shell
npm run develop:client:build
```

## Practical Work
The practical work is serve at :  
http://localhost:4010

The route **http://localhost:4010/api** is proxyfying to the **http://localhost:5010**.

### Exercices 

Each exercices are contained in the **src/** directory.  
For one exercice there is two directory : 
*  **exercice-[xx]**: sources where to write code to make the exercice
*  **exercice-[xx]-correction**: sources where is the correction of the exercice

## API 
The API of the practical work is serve at :  
http://localhost:5010

### Routes :

* [GET] **/api/games**: get all games
* [GET] **/api/game/:id**: get a game
* [POST] **/api/game**: create a new game
* [PUT] **/api/game/:id**: update a game
* [DELETE] **/api/game/:id**: delete a game

### SwaggerUI :
A SwaggerUI is available at :<br />
http://localhost:5010/?url=http://localhost:5010/helpers/swagger.yaml


## Built With

* [ReactJS](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux](https://redux.js.org/)
* [Jest](https://jestjs.io/)
* [Sass](https://sass-lang.com/)
* [Webpack](https://webpack.js.org/)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

## Authors

* **Joris Moine** --
* **Aurélien Dupays Dexemple** -- [SugarDarius](https://github.com/SugarDarius)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details