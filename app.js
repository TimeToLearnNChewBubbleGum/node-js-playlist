const express = require('express')

const app = express() // express methods

app.set('view engine', 'ejs') // ejs as express view engine
app.use('/assets', express.static('assets')) // use middleware

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

app.get('/profile/:name', function(req, res) {

    let data = {
        age: 60,
        job: 'coder',
        hobbies: ['eating', 'belching', 'napping']
    }

    res.render('profile', {
        person: req.params.name,
        data: data
    })
})

app.listen(3000)
