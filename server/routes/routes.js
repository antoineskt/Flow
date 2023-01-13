import express from 'express';

import { signup, login, isAuth} from '../controllers/auth.js';

import { createThing, showHabit, showAllHabits, getCurrentId, testLocal}   from '../controllers/stuff.js';

// ON IMPORT signup, login, isAuth qui sont des constantes dans l'autre page


// création du routeur
const router = express.Router(); 

router.post('/createThing', createThing);
// à la place de faire app.post mtn on peut faire router.post
router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/showHabit/:id', showHabit);
// à test ici avec http://localhost:5000/showHabit/1 qui renvoit les infos de l'id 1 

router.get('/showAllHabits', showAllHabits);

router.get('/getCurrentId', getCurrentId);

router.get('/testLocal', testLocal);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "test postman au http://localhost:5000  " });
});

// will match any other path
// router.use('/', (req, res, next) => {
//     res.status(404).json({error : "ici je peux ecrire un autre chemin pour une autre page"});
// });

export default router;