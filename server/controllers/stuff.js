import Habit from "../models/habit.js"; //majuscule ou PAS ???
import User from "../models/user.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


const createThing = (req, res, next) => {
  const thing = new Habit({
    title: req.body.title,
    goals: req.body.goals,
    habitId: req.body.habitId,
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
  Habit.findOne({ where: { id: req.params.id } })

    .then((habit) => res.status(200).json(habit))

    .catch((error) => res.status(404).json({ error }));
};



const showAllHabits = (req, res, next) => {
  Habit.findAll()

    .then((habit) => res.status(200).json(habit))

    .catch((error) => res.status(404).json({ error }));
};

const getCurrentId = async (req, res) => {
  try {
    console.log(res);
    const user = await User.findOne({ where: { email: res.locals.email } });

    if (!user) {
      return res.status(400).json(error);
    }
  
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error});
  }
};

const testLocal = (req, res, next) => {
  
  res.send("hello world");
  next ();
}

export { createThing, showHabit, showAllHabits, getCurrentId, testLocal };
