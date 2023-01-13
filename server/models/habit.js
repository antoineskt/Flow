import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

import User from '../models/user.js';


// Creation du modèle de donnée pour User

const Habit = sequelize.define(
  "habit",
  {
    habitId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    goals: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
    
  },
  {
    timestamps: false,
  }
);




sequelize
  .sync()
  .then(() => {
    console.log("Habit sequelize table created successfully!");
    
  })
  
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Habit;
