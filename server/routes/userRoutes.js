import passport from "passport";
import express, { Router } from "express";

const userRouter = Router();

userRouter.get('/current_user', (req, res) => {
  res.send(req.user);
});

userRouter.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
})

export default userRouter;
