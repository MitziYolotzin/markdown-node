const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

//ejs to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description'
    }]

    //res.send('Hello world')
    res.render('index', {articles: articles})
})

app.listen(5000)