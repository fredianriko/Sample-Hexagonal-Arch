import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//   database: "pokemon_db",
//   username: "root",
//   password: "root",
//   dialect: "mysql",
//   port: 3306,
// });
const sequelize = new Sequelize("mysql://root:root@localhost:3306/pokemon_db");
export default sequelize;
