const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justone:false,
    ref:'Category'
})

schema.virtual('newslist',{
    localField:'_id',
    foreignField:'parent',
    justone:false,
    ref:'Article'
})
module.exports = mongoose.model('Category', schema)