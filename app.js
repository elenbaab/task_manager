/////

//import express, create express app
const express = require('express');
const app = express();
//allows us to use static files in the 'public' folder (CSS, images, etc.)
app.use(express.static('public'));
//need this middleware for accepting/sending form data (post requests, e.g. create a task), recognizes incoming request object as a string/array
app.use(express.urlencoded({extended:true}));

//import taskRoutes file - taskRoutes simplifies taskController file, which renders a new page view relative to the request that has been made (e.g. about page, create a page, delete a page, go to a specific task with the ID, etc.)
const taskRoutes = require('./routes/taskRoutes');

//import mongoose package - translates code and its representation in MongoDB to the NodeJS server
const mongoose = require('mongoose');
//constant to store MongoDB URL - Used for establising a connection to the database through Mongoose
const dbURL = '';
//defines a connection to MongoDB using Mongoose - paramaters are : 1)The MongoDB URL, 2)Options object to parse MongoDB Connection Strings and to manage connections efficiently, 3)After DB connection is ready, listen for requests and accecpt connections, 4)Log error to console if there is one
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true}).then((result) => app.listen(3000)).catch((err) => console.log(err));

//sets the view engine to be ejs for this application (there are others, but here we are using ejs to replace variables in template files with actual values)
app.set('view engine', 'ejs');

//import morgan package - an http request middleware for nodeJS (logs response status to console for each request)
const morgan = require('morgan');
//prints to console response status
app.use(morgan('dev'));

/////

//URL ending in '/' gets redirected to '/tasks' (the home page)
app.get('/', (req,res) => {
    res.redirect('/tasks');
});

//URL ending in '/about' --> page is rendered into the 'about' page, title is changed to 'Task Page | About'
app.get('/about', (req,res) => {
    res.render('about', {title:'About'});
});

//taskRoutes handles all other cases (create, delete, search by ID, etc)
app.use('/tasks',taskRoutes);

//Non-set URL --> 404 status set, page is rendered into the '404' page, title is changed to 'Task Page | 404'
app.use((req,res) => {
    res.status(404).render('404', {title:'404'});
});

/////