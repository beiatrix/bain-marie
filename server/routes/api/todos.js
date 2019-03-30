const express = require('express')
const router = express.Router()

/* GET /api/todos */
router.get('/', (req, res, next) => {
  res.send('API is working')
})

module.exports = router
