const express = require('express')
const bodyParser = require('body-parser')
const Post = require('./models/post')

let app = express()
app.use(bodyParser.json())

app.get('/api/posts', (req, res) => {
  Post.find( (err, posts ) => {
    if(err) { return next(err) }
    res.json(posts)
  })
})

app.post('/api/posts', (req, res, next) => {
  let post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save((err, post) => {
    if( err ) { return next(err) }
    res.json(201, post)
  })
})

app.listen(3000, () => {
  console.log('Server listening on', 3000)
})