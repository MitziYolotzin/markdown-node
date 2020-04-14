const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

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
        }
    })
    //validate each article, create our slug from our title
articleSchema.pre('validate', function() {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true

        })
    }
})

//export model and schema
//for DB
module.exports = mongoose.model('Article', articleSchema)