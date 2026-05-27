const express = require('express')

const router = express.Router()

const projects = require('../data/projects')

router.get('/', (req, res) => {
  res.json(projects)
})

module.exports = router