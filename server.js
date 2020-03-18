const express = require('express')
const app = express()

//ejs to html
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    //res.send('Hello world')
    res.render('index')
})

app.listen(5000)