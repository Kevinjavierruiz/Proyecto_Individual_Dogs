require("dotenv").config();

//DEPENDENCIAS
const express = require("express");
const morgan = require("morgan");
const server = express();

//RUTAS

//MIDDLEWARES
server.use(express.json());
server.use(morgan("dev"));

//MODULARIZACIÓN DE RUTAS


//RUTA DE PRUEBA
server.get("/",(req,res)=>{
    res.send("funcionando...");
})

module.exports = server;