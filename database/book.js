const mongoose = require("mongoose");

//creating a book schema
const BookSchema = mongoose.Schema({
    
    ISBN:{
        type:String,
        required:true,
        minLength:8,
        maxLength:10
    },
    title:{
        type:String,
        required:true,
        minLength:8,
        maxLength:10
    },
    pubDate:String,
    language:String,
    numPage:Number,
    author:[Number],
    publications:Number,
    category:[String],

});

//creating a book model
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;