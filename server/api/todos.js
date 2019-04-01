const express = require('express')
const router = express.Router()
const {Todos} = require('../db/models')

/* GET /api/todos */
router.get('/', async (req, res, next) => {
  // res.send('API is working')
  try {
    const todos = await Todos.findAll()
    res.json(todos)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
