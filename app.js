const { Console } = require('console');
const express = require('express')
const app = express();
const port = 3000;
const path = require('path')
// const methodOverride = require("method-override");


//setting view engine
app.set("view engine", "ejs")
//setting folder for static assets
app.use(express.static("public"))

// app.use(methodOverride("_method"));

// // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//home page
app.get("/", (req, res) => {
    res.render('Home.ejs')
})

//contact us page
app.get("/contact", (req, res) => {
    res.render('Contact.ejs')
})

// Getting data from html
app.post('/send', (req, res) => {
    console.log(req.body);
    res.redirect('/')


})

//Fav People
app.get("/fav", (req, res) => {
    res.render('fav.ejs')
})
//Fav-Cities
app.get("/favcities", (req, res) => {
    res.render('favcities.ejs')
})
//Tourspot
app.get("/Tourspot", (req, res) => {
    res.render('Tourspot.ejs')
})
// Error
app.get('/*', (req, res) => {
    res.send("Error:404")
})
app.listen(port, () => {
    console.log('port is listerning ' + port);
})

