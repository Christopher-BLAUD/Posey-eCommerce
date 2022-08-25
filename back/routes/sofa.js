const express = require('express')
const router = express.Router()
const Sofa = require('../models/products')
const multer = require('../middlewares/multer-config')

router.post('/', multer, (req, res, next) => {
  const sofaObject = req.body.product
  const sofa = new Sofa({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    rank: req.body.rank,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`,
  })
  sofa
    .save()
    .then(() =>
      res
        .status(200)
        .json({ message: 'Le produit a été enregistré avec succés !' })
    )
    .catch((error) => res.status(500).json({ error }))
})

router.get('/products', (req, res, next) => {
  Sofa.find()
    .then((sofas) => res.status(200).json(sofas))
    .catch((error) => res.status(500).json({ error }))
})

router.get('/product/:productId', (req, res, next) => {
  Sofa.findOne({_id: req.params.productId})
  .then(sofa => res.status(200).json(sofa))
  .catch(error => res.status(500).json({error}))
})
module.exports = router
