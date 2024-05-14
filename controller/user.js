const data = require("../src/models/leader")
const mongoose=require('../src/db/mongoose')
const mail=require("../nodemailer/user")
const axios = require("axios");
require('dotenv').config()

module.exports.register=async function register(req,res) {
    const captcha=req.body.captcha;
    
    const {leaderemail,email1,email2,leadername}=req.body;
      try{
        const secretkey = process.env.SECRET_KEY;
        const verifyurl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captcha}`;
        const response = await axios.post(verifyurl)
        // console.log(response.data.success);
         if(response.data.success){

          const users=await data.aggregate( [
            { $match: { $or: [ { leaderemail: leaderemail }, { email1: leaderemail}, { email2: leaderemail}, { leaderemail: email1} , { email1: email1} , { email2: email1} , { leaderemail: email2} , { email1: email2} , { email2: email2} ] } }
          ]) 
              if(users.length==0){
                const registerdata=new data(req.body)
                  await registerdata.save() ;
                  await mail(leaderemail);      
                     res.status(200).send("registered") 
                } 
              else{
                 
                  res.status(409).send("user already registered");
                }  
                    
         }
       else{
            res.status(498).send("Invalid Captcha")
         }

        }
        catch(e){
            console.log("Error",e);
            return res.status(404).json({
                message:e.message,
                error:"invalid data"
            })
        }
        
            
}
