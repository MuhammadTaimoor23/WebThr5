const Student = require("./student")

const createStudent=async(title,details,salary)=>{
console.log("Student created");
let Student=new Students();
Student.title=title;
Student.details=details;
Student.salary=salary;
  await Student.save();
  return Student;
}
const getAll=async()=>{
    console.log("getall");
    let StudentList=await Students.find();
    return StudentList;

}
const deleteStudent=async(id)=>{
    console.log("getall");
    let StudentList=await Students.findByIdAndDelete(id);
    return StudentList;
    }
    const updateStudent=async(id,title,details,salary)=>{
        
        let Student=await Students.findByIdAndUpdate(id);
        Student.title=title;
        Student.details=details;
        Student.salary=salary;
          await Student.save();
          return Student;
        }
module.exports.createStudent=createStudent;
module.exports.getAll=getAll;
module.exports.deleteStudent=deleteStudent;
module.exports.updateStudent=updateStudent;
