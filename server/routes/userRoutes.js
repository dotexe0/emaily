import passport from "passport";
import express, { Router } from "express";

const userRouter = Router();

// get user model
userRouter.get('/current_user', (req, res) => {
  res.send(req.user);
});

// logout user
userRouter.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
})

export default userRouter;
