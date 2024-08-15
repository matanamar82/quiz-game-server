const mongoose =require('mongoose');


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    userPass:{
        type:String,
        required:true
    },
    userQuiz:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Question'
    }
});

const User=mongoose.model('User',userSchema);


module.exports=User;