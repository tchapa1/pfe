const express = require('express');
const app = express();
const congeRoute = express.Router();
// conge model
let conge = require('../models/conge');
// Add conge
congeRoute.route('/create').post((req, res, next) => {
  conge.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All conges
congeRoute.route('/').get((req, res) => {
  conge.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single conge
congeRoute.route('/read/:id').get((req, res) => {
  conge.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update conge
congeRoute.route('/update/:id').put((req, res, next) => {
  conge.findByIdAndUpdate(req.params.id, {
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
// Delete conge
congeRoute.route('/delete/:id').delete((req, res, next) => {
  conge.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = congeRoute;