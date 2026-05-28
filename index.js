require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// ── CORS fix — allow your Vercel frontend ──
app.use(cors({
  origin: 'https://portfolio-frontend-em8g.vercel.app'
}))

app.use(express.json())

const contactRoute  = require('./routes/contact')
const projectsRoute = require('./routes/projects')
const skillsRoute   = require('./routes/skills')

app.use('/api/contact',  contactRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/skills',   skillsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})