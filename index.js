const express = require('express');


const app = express()



app.use(express.json())
app.use('',require('./Routes/user'))
app.use('',require('./Routes/todos'))



const  port = 7000

app.listen(port,()=>console.log('json server listening at port',port))

