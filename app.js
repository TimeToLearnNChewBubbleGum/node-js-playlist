const express = require('express')

const app = express() // express methods

app.set('view engine', 'ejs') // ejs as express view engine

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/contact', function(req, res) {
    res.sendFile(`${__dirname}/contact.html`)
})

app.get('/profile/:name', function(req, res) {
    let data = {
        age: 60,
        job: 'coder'
    }
    res.render('profile', {
        person: req.params.name,
        data: data
    })
})

app.listen(3000)
