const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
const cors= require('cors')
app.use(cors({
    origin:"*"
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

const bodyParser= require('body-parser')
const { register } = require("./controller/user");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// register();
app.post('/form',register);

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})


