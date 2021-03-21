"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];
var db = {};

if (config.use_env_variable) {
  console.log("12 config.use_env_variable is: " + config.use_env_variable);

  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  console.log("16 config.use_env_variable is: " + config.use_env_variable);

  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    // var model = sequelize.import(path.join(__dirname, file));
    // The line immediately below was a solution to replace the line immediately above, found at https://stackoverflow.com/questions/62917111/sequelize-import-is-not-a-function
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
