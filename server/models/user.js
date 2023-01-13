import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

import Habit from '../models/habit.js';

// Creation du modèle de donnée pour User

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Habit, {
  foreignKey: 'userId'
});
Habit.belongsTo(User);



sequelize
  .sync({})
  .then(() => {
    console.log("User sequelize table created successfully!");
   
  })
  // .then((data) => {
  //   Habit.findAll({
  //     where :{
  //       id: 10
  //     }
  //   });
  //   console.log(data)
  // })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default User;
