
const express = require("express")

const axios = require('axios')


const router = new express.Router()


router.get("/todos",async (req,res)=>{

  try{
    const todos = await axios.get('https://my-json-server.typicode.com/MayankArya123/backend-task/todos')
     console.log('posts ooooo',todos.data)

     const FilteredTodos= todos.data.map((ET)=>{

      return {
        title: ET.title,
        completed: ET.completed,
        id: ET.id
      }

     })

     res.json(FilteredTodos)
 
   }
   catch(err){
 
     console.log('error',err)
 
   }

})








module.exports = router
