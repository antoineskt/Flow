import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const databasePassword = process.env.DB_PASSWORD;


const sequelize = new Sequelize('logindb', 'root', databasePassword, {
    dialect: 'mysql',
    host: 'localhost', 
});

try {   sequelize.authenticate();   console.log('Connecté à la base de données MySQL!'); } catch (error) {   console.error('Impossible de se connecter, erreur suivante :', error); }

export default sequelize;

// CONNECTION A LA DATABASE MYSQL AVEC SEQUELIZE 