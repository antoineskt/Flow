import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

// Creation du modèle de donnée pour User

const Habit = sequelize.define(
  "habit",
  {
    userId: {
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
    console.log("User sequelize table created successfully!");
    User.findAll()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Habit;
