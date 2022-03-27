const express = require("express")
const axios = require('axios')

const router = new express.Router()



router.get("/user",async (req,res)=>{

  const {id} = req.query

  console.log('specific users route hitting',req.query)

  try{
    const user = await axios.get(`https://my-json-server.typicode.com/MayankArya123/backend-task/users/${id}`)

     console.log('user',user.data)

     const todos = await axios.get(`https://my-json-server.typicode.com/MayankArya123/backend-task/todos/?userId=${id}`)

     console.log('todo',todos.data)

     //addding all todos of user to todos property
      user.data.todos = todos.data

      console.log('user after',user)


     res.json(user.data)
 
   }
   catch(err){
 
     console.log('error',err)
 
   }

})



module.exports = router
