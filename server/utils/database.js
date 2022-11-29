import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('logindb', 'root', 'Toinous3071!', {
    dialect: 'mysql',
    host: 'localhost', 
});

try {   sequelize.authenticate();   console.log('Connecté à la base de données MySQL!'); } catch (error) {   console.error('Impossible de se connecter, erreur suivante :', error); }

export default sequelize;

// CONNECTION A LA DATABASE MYSQL AVEC SEQUILIZE 