const express = require('express');
const app = express();
const pdgRoute = express.Router();
// pdg model
let pdg = require('../models/pdg');
// Add pdg
pdgRoute.route('/create').post((req, res, next) => {
  pdg.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All pdgs
pdgRoute.route('/').get((req, res) => {
  pdg.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single pdg
pdgRoute.route('/read/:id').get((req, res) => {
  pdg.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update pdg
pdgRoute.route('/update/:id').put((req, res, next) => {
  pdg.findByIdAndUpdate(req.params.id, {
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
// Delete pdg
pdgRoute.route('/delete/:id').delete((req, res, next) => {
  pdg.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = pdgRoute;