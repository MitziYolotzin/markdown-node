const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    //res.send('In articles')
    res.render('articles/new')
})

router.post('/', (req, res) => {
    
})

module.exports = router