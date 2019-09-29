const mongoose =require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    avatar:{type:String},
    banner: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  skills: [{
    icon: { type: String },
    name: { type: String },
    delay: { type: String },
    cost: { type: String },
    description: { type: String },
    tips: { type: String },
  }],
  itme1:[{type:mongoose.SchemaTypes.ObjectId,res:'Item'}],
  usageTips:{type:String},
  battleTips:{type:String}
})

module.exports= mongoose.model('Hero',schema)