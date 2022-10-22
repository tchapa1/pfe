const express = require('express');
const app = express();
const absenceRoute = express.Router();
// absence model
let absence = require('../models/absence');
// Add absence
absenceRoute.route('/create').post((req, res, next) => {
  absence.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All absences
absenceRoute.route('/').get((req, res) => {
  absence.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single absence
absenceRoute.route('/read/:id').get((req, res) => {
  absence.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update absence
absenceRoute.route('/update/:id').put((req, res, next) => {
  absence.findByIdAndUpdate(req.params.id, {
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
// Delete absence
absenceRoute.route('/delete/:id').delete((req, res, next) => {
  absence.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = absenceRoute;