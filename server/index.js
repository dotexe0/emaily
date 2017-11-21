import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

import googleRouter from './routes/googleOAuthRoutes';
import userRouter from './routes/userRoutes';
import keys from './config/keys';

import './models/User';
import './services/passport'; // google passport strategy

// connect server to mongoDB
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

// JSON parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookie will last for 30 days
    keys: [keys.cookieKey] // can enter multiple cookie keys and will choose randomly
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', googleRouter);
app.use('/api', userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
