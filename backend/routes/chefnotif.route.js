const express = require('express');
const app = express();
const notifRoute = express.Router();
// notif model
let notif = require('../models/notif');
// Add notif
notifRoute.route('/create').post((req, res, next) => {
  notif.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All notifs
notifRoute.route('/').get((req, res) => {
  notif.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single notif
notifRoute.route('/read/:id').get((req, res) => {
  notif.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update notif
notifRoute.route('/update/:id').put((req, res, next) => {
  notif.findByIdAndUpdate(req.params.id, {
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
// Delete notif
notifRoute.route('/delete/:id').delete((req, res, next) => {
  notif.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = notifRoute;