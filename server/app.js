import express from 'express';

import sequelize from './utils/database.js';

import router from './routes/routes.js';


// on appelle la méthode express qui crée l'App lication Express
const app = express(); 


// parse la requete avec un url encodé
app.use(express.urlencoded({ extended: true }));

// recupere tt les requetes qui ont un content Json et nous donne ce contenu dans req.body
app.use(express.json());


// autorise les accès à tous(*) et d'envoyer des requêtes get ect
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();  //next passe l'éxecution au middleware d'après
});

app.use(router);

// ON UTILISE LES ROUTER 

sequelize.sync(); 

app.listen(5000, () => {
    console.log('go to http://localhost:5000   FOR SEE DATA ');
});