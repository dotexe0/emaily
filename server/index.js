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
  (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
  }
));

app.get('/auth/google', passport.authenticate('google', {
  //only need user's profile and email, can request more (see oauth docs)
  scope: ['profile', 'email']
}));

// 'code' has been sent through /auth/google and now we have a user profile
app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
