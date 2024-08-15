const mongoose =require('mongoose');


const quizSchema=new mongoose.Schema({
    quizName:{
        type:String,
        require:true
    },
    quizQuestions:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    quizTime:{
        type:Number,
        required:true
    }
});

const Quiz=mongoose.model('Quiz',quizSchema);

module.exports=Quiz;