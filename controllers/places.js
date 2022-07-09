const router = require('express').Router()

router.get('/', function(req, res){
    let places = [{
                name: 'Rook Coffee',
                city: 'Long Branch',
                state: 'NJ',
                cuisines: 'Coffee, Bakery',
                pic: 'https://cdn.shopify.com/s/files/1/1978/4569/files/RookLogoFinished_180x_1be85ac5-b282-483f-baee-31eaff1c3a55_174x.png?v=1519333525'
              }, {
                name: 'In-N-Out Burger',
                city: 'Los Angeles',
                state: 'CA',
                cuisines: 'Burgers, Snacks',
                pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/InNOut_2021_logo.svg/1200px-InNOut_2021_logo.svg.png'
              }]
    res.render('places/index',{places})
})

router.get('/new', function(req,res){
  res.render('places/new')
})

// router.get('/', function(req,res){
//   res.render('places/:id')
// })

router.post('/', function(req,res){
  // if(!req.body.image){
  //   req.body.image = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60'
  // }
  res.redirect('/places')
})

module.exports = router
