// roshanDb

//swOAIwpldXIZUY72
const connectDB=require('./config/db')

const express = require('express');
const path= require('path');
const cors = require('cors')




const app = express();

connectDB()
app.get("/",(req,res)=>{
    res.send("API is working")
})
app.use(cors())

// Init Middeleware

app.use(express.json({extended : false}))


// //define routes 


app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/post',require('./routes/api/post'))

// serve statci assests in production 

if (process.env.NODE_ENV==='production'){
    // set a static folder
    app.use(express.static('client/build'))
    app.get('*',(res,req)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


const PORT = process.env.PORT || 5000 ;


app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))

