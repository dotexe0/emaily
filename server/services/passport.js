
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20'; // .Strategy
import mongoose from 'mongoose';

import keys from '../config/keys';

const User = mongoose.model('users'); //model class

// for initial login attempt
passport.serializeUser((user, done) => {
  // user.id is the user id from mongodb
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("accessToken", accessToken);
      // console.log("refreshToken", refreshToken);
      // console.log("profile", profile);
      User.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            // we already have record with profile.id
            done(null, existingUser); // first arg. is error, 2nd arg is user record
          } else {
            // no user found, make new record
            new User({ googleId: profile.id })
              .save()
              .then(newUser => done(null, newUser));
          }
        });
    }
  )
);


