const Post = require('../../models/post')
const router = require('express').Router()

router.get('/api/posts', (req, res, next) => {
  Post.find()
    .sort('-date')
    .exec( (err, posts) => {
      if( err ) { return next(err) }
      res.json(posts)
    })
})

router.post('/api/posts', (req, res, next) => {
  let post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save((err, post) => {
    if( err ) { return next(err) }
    res.json(201, post)
  })
})

module.exports = router