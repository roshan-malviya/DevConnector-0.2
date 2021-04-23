// roshanDb

//swOAIwpldXIZUY72
const connectDB=require('./config/db')

const express = require('express');

const app = express();

connectDB()

// Init Middeleware

app.use(express.json({extended : false}))

app.get('/', (req,res)=>res.send('API running'))

// //define routes 

app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/post',require('./routes/api/post'))


const PORT = process.env.PORT || 5000 ;


app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))

