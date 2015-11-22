const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public', { index: 'posts.html'}))
app.use(require('./controllers/api/posts'))

app.listen(3000, () => {
  console.log('Server listening on', 3000)
})