
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
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
          if (existingUser) {
            // we already have record with profile.id
            return done(null, existingUser); // first arg. is error, 2nd arg is user record
          }
          // no user found, make new record
          const newUser = await new User({ googleId: profile.id }).save();
          done(null, newUser);
    } catch(error) {
      console.log('Error during authentication: ', error);
    }
  })
);


