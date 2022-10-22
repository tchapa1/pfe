const express = require('express');
const app = express();
const messageRoute = express.Router();
// message model
let message = require('../models/message');
// Add message
messageRoute.route('/create').post((req, res, next) => {
  message.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All messages
messageRoute.route('/').get((req, res) => {
  message.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single message
messageRoute.route('/read/:id').get((req, res) => {
  message.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update message
messageRoute.route('/update/:id').put((req, res, next) => {
  message.findByIdAndUpdate(req.params.id, {
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
// Delete message
messageRoute.route('/delete/:id').delete((req, res, next) => {
  message.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = messageRoute;