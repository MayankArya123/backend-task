

const express = require("express")
// const User = require("../models/user")
// const Todo = require("../models/todos")
const axios = require('axios')


// const Farm = require("../models/Farm")
// const Booking = require("../models/Bookings")
// const {UserAuth} = require("../middleware/auth")
// const { captureRejectionSymbol } = require("stream")

const router = new express.Router()


router.get("/todos",async (req,res)=>{

  try{
    const todos = await axios.get('https://my-json-server.typicode.com/MayankArya123/backend-task/todos')
     console.log('posts ooooo',todos.data)
     res.json(todos.data)
 
   }
   catch(err){
 
     console.log('error',err)
 
   }

})


// router.post("/addUser", async (req, res) => {

//   try{
//     const posts = await axios.post('https://my-json-server.typicode.com/MayankArya123/backend-task/posts')
//      console.log('posts ooooo',posts.data)
//      res.json(posts.data)
 
//    }
//    catch(err){
 
//      console.log('error',err)
 
//    }

//   // res.send('jjj')
// })



// router.post("/add/todo", async (req, res) => {

// console.log('addtodo route hitting')

//   const { userId,id,title} = req.body

//   const newTodo = new Todo({
//     userId:userId,
//     id:id,
//     title:title,
//   })

  
//   try {
//     const todo = await newTodo.save()
//     // const token = await user.getAuthToken()
//     console.log("dd", todo)

//     const user = await User.findOne({_id:userId})

//         if (!user) {
//           throw new Error("unable to find user")
//         }

//         user.todos = user.todos.concat({ userId:userId,
//           id:id,
//           title:title})

//         await user.save()

//     res.status(201).send({msg:'todo added'})
//   } catch (err) {
//     console.log("error", err)
//     res.status(400).send(err)
//   }

//   // res.send('jjj')
// })








module.exports = router
