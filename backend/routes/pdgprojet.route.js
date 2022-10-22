const express = require('express');
const app = express();
const projetRoute = express.Router();
// projet model
let projet = require('../models/projet');
// Add projet
projetRoute.route('/create').post((req, res, next) => {
  projet.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All projets
projetRoute.route('/').get((req, res) => {
  projet.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single projet
projetRoute.route('/read/:id').get((req, res) => {
  projet.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update projet
projetRoute.route('/update/:id').put((req, res, next) => {
  projet.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete projet
projetRoute.route('/delete/:id').delete((req, res, next) => {
  projet.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = projetRoute;