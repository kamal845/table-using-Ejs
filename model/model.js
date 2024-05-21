const mongoose = require('mongoose');
const tableSchema=new mongoose.Schema({
SNo:{
    type:Number,
    required:false
},
name:{
    type:String,
    required:true
},
Age:{
    type:Number,
    required:true
},
image:{
    type:String,
    required:true
},
school:{
    type:String,
    required:true
}}
,{
    timestamps: true
});
module.exports=mongoose.model('Table',tableSchema);