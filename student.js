const mongoose=require("mongoose");
const Schema = mongoose.Schema({
   Name: String,
   RegNo : Number,
   Marks:Number
});
const StudentModel=mongoose.model("StudentModel",Schema);
module.exports=StudentModel;