import express from 'express';
import './services/passport';
import router from './routes/googleOAuthRoutes';

const app = express();

app.use('/auth', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
