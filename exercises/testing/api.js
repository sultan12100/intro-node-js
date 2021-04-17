const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  throw Error('bla bla')
  // should ge user by given id in route params
  try {
    const user = await users.findUser(id)
    res.status(200).send(user)
  } catch (err) {
    res.writeHead(404)
    res.end()
    return
  }
})

app.delete('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    await users.deleteUser(id)
    res.status(201).send({ id })
  } catch (err) {
    res.writeHead(404)
    res.end()
    return
  }
})

module.exports = app
