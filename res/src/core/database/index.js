require("dotenv").config();
const fs = require("fs");
const process = require("process");
const path = require("path");
const basename = path.basename(__filename);
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.json")[env];

let sequelize = {};
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    sequelize[model.name] = model;
  });

Object.keys(sequelize).forEach((modelName) => {
  if (sequelize[modelName].associate) {
    sequelize[modelName].associate(sequelize);
  }
});

module.exports = sequelize;
