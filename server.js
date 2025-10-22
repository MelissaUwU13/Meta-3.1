import express from 'express'
import actorsRoutes from './routes/actors.js'
import directorsRoutes from './routes/directors.js'
import moviesRoutes from './routes/movies.js'

//importar el modulo express
const express = require('express');

//crear una instancia de la aplicacion express
const app = express();

app.use(express.json());


app.use('api/actores',use actorsRoutes);
app.use('api/directores'use directorsRoutes);
app.use('api/peliculas',use moviesRoutes);


//definir el puerto donde correra el servidor
const PORT = 3000;

// Definir la ruta GET para el endpoint raiz "/" 
app.get('/',(req,res) =>{
    res.send('Hola mundo');
});


app.get('/peliculas/:nombre',(req,res)=>{
    console.log(req.query.x);
    res.send(`estas en get hola ${req.params.nombre}`);
});

//app.get('/peliculas/:nombre',(req,res)=>{
  //  res.send(`estas en get hola ${req.params.nombre}`);
//});

app.post('/',(req,res) =>{
    const body = req.body;
    console.log(body);
    res.json({
        message: 'Otro hola mundo',
        datos: body
    })
})

//iniciar el servidor
const server = app.listen(PORT,() =>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
})

server.on('error',error => console.log(`Error en el servidor: ${error}`));