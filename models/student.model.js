// define the schema of students collection to be stored in the DB
const mongoose = require("mongoose");
// schema 
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

// Go aheade and create corresponding Collection in DB
module.exports = mongoose.model("Student" , studentSchema)
