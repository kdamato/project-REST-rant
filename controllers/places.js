const router = require('express').Router()
const db = require('../models')

router.get('/', function(req, res){
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = undefined
  }
  if (!req.body.city) {
    req.body.city = undefined
  }
  if (!req.body.state) {
    req.body.state = undefined
  }
  db.Place.create(req.body)
  .then(() => {
    res.redirect('places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', function(req,res){
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')

})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')

})

router.get('/:id/edit', (req, res) => {
  res.render('GET edit form stub')
})

router.get("/:id/rant", (req, res) => {
  let id = req.params.id;
  db.Place.findById(id)
    .then((place) => {
      res.render("places/rant", { place });
    })
    .catch((err) => {
      console.log("Error  ", err);
      res.render("errorpage");
    });
});

router.post('/:id/rant', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      // if(req.body.rant === 'on'){
      //   req.body.rant = true
      // }
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.delete('/:id/rant/:rantId', function(req,res){
  res.send('POST /:id/rant/:rantId stub')
})

// router.get('*', function (req,res){
//   res.render('error404')
// })

module.exports = router;
