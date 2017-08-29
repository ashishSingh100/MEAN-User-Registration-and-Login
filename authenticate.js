var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Models = require('./models/models');


passport.use(new LocalStrategy({
        usernameField: 'email'
    },

    function (username, password, done) {
        Models.findOne({
            email: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false,{
                message:'User Not found'
                            });
            }
            if (!user.validPassword(password)) {
                return done(null, false,{
                    message:'Password is wrong'
                });
            }
            return done(null, user);
        });
    }
));

module.exports=passport;
