const nodemailer=require('nodemailer')
require('dotenv').config()

const mail=async (email,name)=>{
    try{
      var transporter = nodemailer.createTransport({
        secure: true, 
        service:'gmail',
        auth: {
        user: process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASS, 
        authentication:'plain'
        },
         tls : {
        rejectUnauthorized:false
         }
      });
      const data={
        from: '"Team Conatus" <teamconatus@gmail.com>',  
        to:email,
        subject: "EOC Registration Confirmation", 
        // text: "Hello!", 
        html: `<h2>Dear Participant,</h2>
        <p>Congratulations, you have been successfully registered for the thrilling 2-day event <strong>EPOCH Of COGNITION.</strong></p>
        <p><strong>Note:</strong></p>
        <ol>
            <li>Ensure all team members are present on the day of the event.</li>
            <li>Be on time to get the most out of the event.</li>
        </ol>
        <p><strong>Important details of the Event:</strong></p>
        <ul>
            <li><strong>Venue:</strong> CS/IT BLOCK (3rd Floor)</li>
            <li><strong>Dates:</strong> May 16th - 17th</li>
            <li><strong>Duration:</strong> 4pm to 6pm</li>
        </ul>
        Stay connected with us on Instagram Handle for event updates, follow us on Instagram - <a href="https://bit.ly/instagram_conatus">https://bit.ly/instagram_conatus</a>
        <p><strong>Contact info:</strong></p>  
        <ul>
            <li>You may reach us at our help desk (CS/IT Block, BB Block) and after 4 PM, at CSE Lab 4 (4th floor, CS/IT Block).</li>
            <li>Feel free to reach out to our dedicated event support team at : 
            </li>
            <ul>
                <span>&#9742;</span> 9368053101 - Prakhar
                <br>
                <span>&#9742;</span> 7275099221 - Sahil
            </ul>
        </ul>
    
    
        
       
        <p>Thank you for being a part of this exciting event! We look forward to providing you with an enriching experience.</p>
        <h4><p>Best regards,<br>Team Conatus<br>Learn.lmprovise.Grow</p></h4>`,          
       }
       transporter.sendMail(data,async(error,info)=>{
        if(error){
            throw new error;
        }
            console.log("email sent",info.messageId);
            
       });
    }
    catch(err){
      console.log(err);
    }
}

module.exports=mail;


