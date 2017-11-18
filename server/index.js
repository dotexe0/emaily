import express from 'express';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20'; // .Strategy

import keys from './config/keys';

const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
  (accessToken) => {
    console.log(accessToken);
  }
));

app.get('/auth/google', passport.authenticate('google', {
  //only need user's profile and email, can request more (see docs)
  scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
