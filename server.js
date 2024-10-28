const express = require("express");
const { sequelize, testConnection } = require("./dataBase/connection");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

//teste a conexão
testConnection();
