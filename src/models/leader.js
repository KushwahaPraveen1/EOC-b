const mongoose = require("../db/mongoose");
const validator = require('validator')

const teamSchema= new mongoose.Schema({
    teamname:{
        type: String,
        unique:true,
        required: [true, "Please Enter team Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],

    },
    leadername:{
        type: String,
        // unique:true,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],

    },
    leaderemail:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    leaderphone:{
        type:Number,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    leaderstudent: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [9, "give your correct stdNo."],
        minLength:[6,"give your correct stdNo."]
        // select: false,
    },
    leadergender:{
        type:String,
        enum:["Male","Female","Other"],
        required:[true,"please enter the gender"]
    },
    leaderbranch:{
        type:String,
        enum:["CS","CSE","ECE","IT","CSE(DS)","ME","CIVIL","AIML","CSE(AIML)","CS(Hindi)","EN","CSIT"],
        required:[true,"please enter the branch"]
    },
    leaderyear:{
        type:String,
        enum:["1st","2nd"],
        required:[true,"please enter your year"]
    },
    leaderresidence:{
        type:String,
        enum:["Day Scholar","Hosteler"],
        required:[true,"please enter your residence"],
    },
    name1:{
        type: String,
        // unique:true,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],

    },
    email1:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    phone1:{
        type:Number,
        unique:true,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    student1: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [9, "give your correct stdNo."],
        minLength:[6,"give your correct stdNo."],
        
    },
    gender1:{
        type:String,
        enum:["Male","Female","Other"],
        required:[true,"please enter the gender"]
    },
    branch1:{
        type:String,
        enum:["CS","CSE","ECE","IT","CSE(DS)","ME","CIVIL","AIML","CSE(AIML)","CS(Hindi)","EN","CSIT"],
        required:[true,"please enter the branch"]
    },
    year1:{
        type:String,
        enum:["1st","2nd"],
        required:[true,"please enter your year"]
    },
    residence1:{
        type:String,
        enum:["Day Scholar","Hosteler"],
        required:[true,"please enter your residence"],
    },
    name2:{
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],

    },
    email2:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    phone2:{
        type:Number,
        unique:true,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    student2: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [9, "give your correct stdNo."],
        minLength:[6,"give your correct stdNo."],
    },
    gender2:{
        type:String,
        enum:["Male","Female","Other"],
        required:[true,"please enter the gender"]
    },
    branch2:{
        type:String,
        enum:["CS","CSE","ECE","IT","CSE(DS)","ME","CIVIL","AIML","CSE(AIML)","CS(Hindi)","EN","CSIT"],
        required:[true,"please enter the branch"]
    },
    year2:{
        type:String,
        enum:["1st","2nd"],
        required:[true,"please enter your year"]
    },
    residence2:{
        type:String,
        enum:["Day Scholar","Hosteler"],
        required:[true,"please enter your residence"],
    },
    
})

// teamSchema.index({ leaderemail: 1, email1: 1, email2:1 }, { unique: true })

// data.collection.createIndex({ leaderemail: 1, email1: 1, email2: 1 }, {unique:true})
// teamSchema.createIndex({ leaderemail: 1, email1: 1, email2: 1 }, { unique: true }); 

const Member = mongoose.model("Member", teamSchema);
Member.collection.createIndex({ leaderemail: 1, email1: 1, email2: 1 }, {unique:true})

module.exports = Member;