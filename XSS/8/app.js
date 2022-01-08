const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(express.static('public'))

routes(app)

// creating our middleware that catches mostly the errors
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message })
})

module.exports = app
