import passport from 'passport';
import express, { Router } from 'express';

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    //  only need user's profile and email, can request more (see oauth docs)
    scope: ["profile", "email"]
  })
);

// 'code' has been sent through /auth/google endpoint and now we have a user profile
router.get(
  "/google/callback",
  passport.authenticate("google"));

export default router;
