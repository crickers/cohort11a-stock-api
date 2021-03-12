const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "C:cohort11a-stock-apistock-api.db",
});
