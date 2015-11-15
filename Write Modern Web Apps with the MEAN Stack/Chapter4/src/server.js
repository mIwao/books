const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

app.get('/api/posts', (req, res) => {
  res.json([
    {
      username: 'dickeyxxx',
      body: 'node rockes!'
    }
  ])
})

app.post('/api/posts', (req, res) => {
  console.log('post received!')
  console.log(req.body.username)
  console.log(req.body.body)
  res.send(201)
})

app.listen(3000, () => {
  console.log('Server listening on', 3000)
})