const express = require('express');
const app = express();
const tacheRoute = express.Router();
// tache model
let tache = require('../models/tache');
// Add tache
tacheRoute.route('/create').post((req, res, next) => {
  tache.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All taches
tacheRoute.route('/').get((req, res) => {
  tache.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single tache
tacheRoute.route('/read/:id').get((req, res) => {
  tache.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update tache
tacheRoute.route('/update/:id').put((req, res, next) => {
  tache.findByIdAndUpdate(req.params.id, {
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
// Delete tache
tacheRoute.route('/delete/:id').delete((req, res, next) => {
  tache.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = tacheRoute;