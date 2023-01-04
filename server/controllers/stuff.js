import Habit from "../models/habit.js"; //majuscule ou PAS ???

const createThing = (req, res, next) => {
  const thing = new Habit({
    title: req.body.title,
    goals: req.body.goals,
    userId: req.body.userId,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post enregistré avec succès",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
}; 

const showHabit = (req, res, next) => {
  Habit.findOne({where : {userId: req.params.id}})
    
    .then((habit) => res.status(200).json(habit))
   
    .catch((error) => res.status(404).json({ error }));

};

const showAllHabits = (req, res, next) => {
Habit.findAll()

  .then((habit) => res.status(200).json(habit))

  .catch((error) => res.status(404).json({ error })); 

};

export { createThing, showHabit, showAllHabits };