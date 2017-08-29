var passport = require('passport');
var mongoose = require('mongoose');
var Models = require('../models/models');
var express = require('express');
var authenticate = require('../authenticate');
var jwt = require('express-jwt');
var config=require('../config')


var auth = jwt({
  secret: config.secretKey,
  userProperty: 'payload'
});

var userRouter = express.Router();



userRouter.post('/register', function (req, res) {
    var user = new Models();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function (err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
});

userRouter.post('/login', function (req, res) {
    res.cookie('user', JSON.stringify(req.user));
    res.send(req.user)


});

userRouter.get('/profile', auth, function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    Models
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

});

module.exports=userRouter;

