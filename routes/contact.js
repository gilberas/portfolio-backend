const express = require('express')
const { Resend } = require('resend')

const router = express.Router()

const resend = new Resend(process.env.RESEND_API_KEY)

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',

      to: 'gillyimo2009@gmail.com',

      subject: `Portfolio Contact From ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    })

    console.log(data)

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Failed to send email',
    })
  }
})

module.exports = router