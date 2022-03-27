
const express = require("express")

const axios = require('axios')


const router = new express.Router()


router.get("/todos",async (req,res)=>{

  try{
    const todos = await axios.get('https://my-json-server.typicode.com/MayankArya123/backend-task/todos')
     console.log('all todos',todos.data)

     const FilteredTodosByDeletingUserId= todos.data.map((ET)=>{

      return {
        title: ET.title,
        completed: ET.completed,
        id: ET.id
      }

     })

     res.json(FilteredTodosByDeletingUserId)
 
   }
   catch(err){
 
     console.log('error',err)
 
   }

})








module.exports = router
