const mongoose =require('mongoose');


const questionSchema=new mongoose.Schema({
    questionTitle:{
        type:String,
        required:true
    },
    questionOptions:{
        type:[String],
        required:true
    },
    correctAnswer:{
        type:Number,
        required:true
    }
});

const Question=mongoose.model('Question',questionSchema);

module.exports=Question;