import  Habit  from '../models/habit.js'; //majuscule ou PAS ???



const createThing = (req, res, next) => {
    const thing = new Habit({
      title: req.body.title,
      goals: req.body.goals,
      userId: req.body.userId
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  export { createThing } ; 
 



