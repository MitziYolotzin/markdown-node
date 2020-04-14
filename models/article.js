const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const articleSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        markdown: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        sanitizedHtml: {
            type: String,
            required: true

        }
    })
    //validate each article, create our slug from our title
articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }
    //convert our markdown to sanitize to html, protect malicious code to escape in HTML
    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
    next()
})

//export model and schema
//for DB
module.exports = mongoose.model('Article', articleSchema)