//1) import express
const express = require('express')

//import user controller
const userController = require('../Controllers/userController')

//import project controller
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

//import multer
const multerConfig = require('../middleware/multerMiddleware')
const multer = require('multer')

//routing is created with the help of routing class present in express module

//2) create an object for routing class
const router = new express.Router()

//3) set up path

//path for register request
router.post('/user/register',userController.register)

//path for login request
router.post('/user/login',userController.login)

//path for resolve add project request
router.post('/addproject',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//path to get home projects 
router.get('/home-project',projectController.getHomeProject)

//path to get all projects
router.get('/all-project',jwtMiddleware,projectController.getAllProject)

//path to get user project
router.get('/user/all-project',jwtMiddleware,projectController.getUserProject)

//path to delete user project 
router.delete('/user-project/delete/:id',jwtMiddleware,projectController.deleteUserProject)

//path to update the user project
router.put('/project/edit/:projectId',jwtMiddleware,multerConfig.single('projectImage'),projectController.editUserProject)

//path for profile update
router.put('/profile-update',jwtMiddleware,multerConfig.single('profile'),userController.profileUpdate)

//4) export router
module.exports = router