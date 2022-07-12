const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', function(req, res){
    res.render('places/index',{places})
})

router.get('/new', function(req,res){
  res.render('places/new')
})

router.get('*', function (req,res){
  res.render('error404')
})

router.get('/:id', function(req,res){
  res.send('places/:id')
})

router.post('/', (req, res) => {
  // if (!req.body.pic) {
  //   // Default image if one is not provided
  //   req.body.pic = 'public/css/images/Burger.jpg'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router;
