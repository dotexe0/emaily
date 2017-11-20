import express from 'express';
import mongoose from 'mongoose';

import './services/passport';
import router from './routes/googleOAuthRoutes';
import keys from './config/keys';

// connect server to mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

app.use('/auth', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
