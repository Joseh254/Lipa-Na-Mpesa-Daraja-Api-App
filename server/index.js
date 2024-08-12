import express from 'express';
import paymentRoute from './routes/paymentRoute.js';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json());

app.use('/api/mpesa', paymentRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
