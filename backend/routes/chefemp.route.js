const express = require('express');
const app = express();
const empRoute = express.Router();
// emp model
let emp = require('../models/emp');
// Add emp
empRoute.route('/create').post((req, res, next) => {
  emp.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All emps
empRoute.route('/').get((req, res) => {
  emp.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single emp
empRoute.route('/read/:id').get((req, res) => {
  emp.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update emp
empRoute.route('/update/:id').put((req, res, next) => {
  emp.findByIdAndUpdate(req.params.id, {
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
// Delete emp
empRoute.route('/delete/:id').delete((req, res, next) => {
  emp.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = empRoute;