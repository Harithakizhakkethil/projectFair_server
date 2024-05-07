//1) import dotenv module
//Loads .env files contents into process.env by default.
require('dotenv').config()

//2) import express
const express = require('express') // we will use the express module while creating server that's why we stored it into a keyword

//3) import cors
const cors = require('cors')

//import router
const router = require('./Routing/router')

/* //import application middleware
require('./middleware/appMiddleware') */

//import connection file
require('./db/connection')


//4) create server
const projfairServer = express()

//5) use cors by server
projfairServer.use(cors())

//6) convert json into javascript object
/* json() method returns a middleware that can convert json format into javascript object  */
/* middleware - req-res cycle control */
projfairServer.use(express.json()) 

//server using router
 projfairServer.use(router) 

//first - name by which other application can use their folder
//second - express.static - export that folder
projfairServer.use('/uploads',express.static('./uploads'))

//7) set port - (to avoid the clash if both frontend and backend works in a same port.so set a different port to backend)
const PORT = 4000 ||process.env

//8) run server
projfairServer.listen(PORT,()=>{
    console.log(`project fair server running successfully at port number ${ PORT}`);
})


/* 
//GET REQUEST
projfairServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:green">server running sucessfully and ready to resolve get request</h1>`)
})

//POST request
projfairServer.post('/',(req,res)=>{
    res.send('post request')
})

//PUT REQUEST
projfairServer.put('/',(req,res)=>{
    res.send('put request')
})
 */