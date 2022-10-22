const express = require('express');
const app = express();
const adminRoute = express.Router();

// admin model
let admin = require('../models/admin');
// Add admin

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




/////////////////////////////////////////////////////////////////////////////////////////

  
adminRoute.route('/login').post((req, res, next) => {
  let fetchedUser;
  admin.findOne({email:req.body.email}).then(user=>{
    if(!user){
      return res.status(401).json({
        message: "Auth failed no such admin (email ne existe pas verifier.......)  "
      })
    }
    fetchedUser=user;
    ss = user.password
    sss =String(req.body.password)
    ssso = req.body.email
    console.log('----------------------------------------')
    console.log(sss.String)
    console.log('----------------------------------------')
    return (req.body.password == user.password);

   // return bcrypt.compare(req.body.password, user.password);

  }).then(result=>{
    //console.log(fetchedUser)



    if(!result){
      return res.status(401).json({
        message: "Auth failed inccorect password"
      })
    }

    console.log(fetchedUser)
    const token = jwt.sign(
      { email: fetchedUser.email, userId: fetchedUser._id },
      "secret_this_should_be_longer",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id
    });
  })
  .catch(e=>{
   
    console.log(e)
  
  })
})

/////////////////////////////////////////////////////////////////////////////////////////


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