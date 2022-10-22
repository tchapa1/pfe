const express = require('express');
const app = express();
const groupeRoute = express.Router();
// groupe model
let groupe = require('../models/groupe');
// Add groupe
groupeRoute.route('/create').post((req, res, next) => {
  groupe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All groupes
groupeRoute.route('/').get((req, res) => {
  groupe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single groupe
groupeRoute.route('/read/:id').get((req, res) => {
  groupe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update groupe
groupeRoute.route('/update/:id').put((req, res, next) => {
  groupe.findByIdAndUpdate(req.params.id, {
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
// Delete groupe
groupeRoute.route('/delete/:id').delete((req, res, next) => {
  groupe.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = groupeRoute;