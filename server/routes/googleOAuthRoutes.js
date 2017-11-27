import passport from 'passport';
import express, { Router } from 'express';

const googleRouter = Router();

googleRouter.get(
  '/google',
  passport.authenticate('google', {
    //  only need user's profile and email, can request more (see oauth docs)
    scope: ['profile', 'email']
  })
);

// 'code' has been sent through /auth/google endpoint and now we have a user profile
googleRouter.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys');
  }
);

export default googleRouter;
