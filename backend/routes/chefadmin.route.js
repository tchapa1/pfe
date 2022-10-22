const express = require('express');
const app = express();
const adminRoute = express.Router();
// admin model
let admin = require('../models/admin');
// Add admin
adminRoute.route('/create').post((req, res, next) => {
  admin.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All admins
adminRoute.route('/').get((req, res) => {
  admin.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single admin
adminRoute.route('/read/:id').get((req, res) => {
  admin.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update admin
adminRoute.route('/update/:id').put((req, res, next) => {
  admin.findByIdAndUpdate(req.params.id, {
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
// Delete admin
adminRoute.route('/delete/:id').delete((req, res, next) => {
  admin.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = adminRoute;