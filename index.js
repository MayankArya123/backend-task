const mongoose = require('mongoose');
// const User = require('./models/user');
// const Task = require('./models/task')


const express = require('express');
// const { update } = require('./models/user');

const app = express()


// mongoose.connect('mongodb+srv://mayank123_:usingDatabaseforfirsttime@testcluster1.ya5ty.mongodb.net/BACKEND_TASK?retryWrites=true&w=majority').then(
//     (succs) => { console.log('database connection established') },
//     err => {console.log('error connecting to database',err) }
//   );


app.use(express.json())
// app.use('',require('./Routes/todo'))
app.use('',require('./Routes/user'))



// const  port = 7000 

// app.listen(port,()=>console.log('server listening at port',port))

