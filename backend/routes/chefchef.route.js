const express = require('express');
const app = express();
const chefRoute = express.Router();
// chef model
let chef = require('../models/chef');
// Add chef
chefRoute.route('/create').post((req, res, next) => {
  chef.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All chefs
chefRoute.route('/').get((req, res) => {
  chef.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single chef
chefRoute.route('/read/:id').get((req, res) => {
  chef.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update chef
chefRoute.route('/update/:id').put((req, res, next) => {
  chef.findByIdAndUpdate(req.params.id, {
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
// Delete chef
chefRoute.route('/delete/:id').delete((req, res, next) => {
  chef.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = chefRoute;