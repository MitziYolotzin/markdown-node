const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

//ejs to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    //res.send('Hello world')
    res.render('index', {text: 'Hello'})
})

app.listen(5000)