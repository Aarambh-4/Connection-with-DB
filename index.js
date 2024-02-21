const mongoose = require('mongoose');
const studentModel = require("./models/student.model1");
// write the code to connect with mongoDB
// Address of mongoDB
mongoose.connect("mongodb://127.0.0.1/be_demodb")

const db = mongoose.connection //start the connection with mongoDB

db.on("error", () => {
    console.log("Error while connection to DB");
});

db.once("open", () => {
    console.log("connected to MongoDB");
    init()
    //running the queris on MongoDB
    dbQueries()

});

//  logic to insert data into the DB
async function init() {
    const student = {
        name: "Amit",
        age: 75,
        email: "jkamit12960@yahoo.com",
        subjects: ["Maths", "Physics"]
    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj);
}

async function dbQueries() {
    // read the student data
    // read the student data based on the id
    console.log("inside the dbQueries functions");
    try {
        const student = await studentModel.findById("65d5fd58d5473552ca703402")
        console.log(student)
    } catch (error) {
        console.log(error)
    }

    // read the student data based on name
    try {
        const students = await studentModel.find({ name: "Amit" })
        // const students = await studentModel.find({ name: "tony" }) []
        // const students = await studentModel.findOne({ name: "Amit" }) nu;;
        // const students = await studentModel.find({}) //acts like a find all
        console.log(students);
    } catch (err) {
        console.log(err)
    }
    // Deal with the multiple conditions 

 const stds =  await studentModel.where("age").gt("10").where("name").equals("Amit").limit(2)
 console.log(stds);

//    Delete one document where name = "Amit"
     

  const student = await studentModel.deleteOne({name : "Amit"})
  console.log(student)

}



