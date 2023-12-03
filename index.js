const express =require("express");
const mongoose=require("mongoose");
const {createStudent,getAll,deleteStudent,updateStudent}=require ("./operations")
const app =express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
.then(async ()=>{
    console.log('connected to the database');

 
     //let Student=await createStudent("Taimoor",82,90);
   //  console.log(Student);

    // update 
    // let Student=await getAll();
    // console.log(Student);

    // Delete
    //  let deleteItem =await deleteStudent("656c84fe6d76ddfe1f0aa5e1");
    //  console.log(deleteItem);

    // Update
   // let updatedData= await updateStudent("656c854507218b025cab0105","fasih","cake and creampie",100);
    //console.log(updatedData);

}).catch((error)=>{
    console.log(error);
})
console.log("Human");
app.listen(6006);