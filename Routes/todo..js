const express = require("express")
const Task = require("../Models/todos")
const User = require("../models/user")
const auth = require("../middleware/auth")
const mongoose = require("mongoose")

const router = new express.Router()



router.get("/todos",(req,res)=>{

  console.log('todos route hitting')

  // const todos = 



})

// router.post("/create", auth, async (req, res) => {
//   // const {email, password} = req.body

//   const newTask = new Task({
//     ...req.body,
//     owner: req.user._id,
//   })

//   try {
//     await newTask.save()
//     res.status(201).send(newTask)
//   } catch (err) {
//     console.log("eorrrrrrrrrrrrrrrrrr", err)
//     res.status(400).send({error: err})
//   }
// })

// router.get("/test", auth, async (req, res) => {
//   // const {email, password} = req.body

//   const user = await User.findById("61f23718ab5578109094489c")

//   console.log(user)

//   await user.populate("tasks").execPopulate()

//   console.log("tasks", user.tasks)

//   // const newTask =  new Task({
//   //     ...req.body,
//   //     owner:req.user._id
//   // })

//   // try {
//   //     await newTask.save()
//   //     res.status(201).send(newTask)
//   // } catch (err) {
//   //   console.log("eorrrrrrrrrrrrrrrrrr", err)
//   //   res.status(400).send({error: err})
//   // }
// })

// router.patch("/update/:id", auth, async (req, res) => {
//   const updates = Object.keys(req.body)

//   console.log('dd',req.user._id)

//   const allowedUpdates = ["description", "completed"]

//   const validUpdate = updates.every((update) => allowedUpdates.includes(update))

//   if (!validUpdate) {
//     return res.status(400).send("invalid update")
//   }

//   try {

//     const task = await Task.findOne({
//       _id: req.params.id,
//       owner: req.user._id,
//     })

//     if (!task) {
//         console.log(task)
//      return  res.status(404).send()
//     }

//     updates.forEach((update) => task[update] = req.body[update])

//     await task.save()

//     res.send(task)
//   } catch (err) {
//     console.log("error", err)
//     res.status(400).send(err)
//   }
// })

// router.get("/tasks", auth, async (req, res) => {
// //   console.log('req.query',req.query.completed,req.query.limit);

// //check when limit is empty string

// const {limit='10',skip='0'} = req.query

// console.log('limit',limit)
// console.log('limit',skip)

//   const match={
//   }
//   const sort={
      
//   }

//   if(req.query.completed){
//       match.completed = req.query.completed === 'true'
//   }

//   if(req.query.sortBy){
//     const parts = req.query.sortBy.split(':')

//     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//   }

// console.log('match',match)

//   try {


//    await req.user.populate({
//         path:'mytasks',
//         match,
//         options:{
//           limit:parseInt(limit),
//           skip:parseInt(skip),
//           sort
//         }
//     })

  
//   // console.log('mytasks',task.mytasks)

//     res.send(req.user.mytasks)
//   } catch (err) {
//     console.log(err)
//     res.status(400).send(err)
//   }
// })

// router.get("/task/:id", auth, async (req, res) => {
//   const id = req.params.id

//   console.log("id" + req.params.id)

//   try {
//     const task = await Task.findById({_id: id, owner: req.user._id})

//     if (!task) {
//       res.status(400).send()
//     }

//     res.send(task)
//   } catch (err) {
//     res.status(400)
//   }
// })

module.exports = router
