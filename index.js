require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())

const contactRoute = require('./routes/contact')
const projectsRoute = require('./routes/projects')
const skillsRoute = require('./routes/skills')

app.use('/api/contact', contactRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/skills', skillsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASS)
})
