import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMİddleware.js';

dotenv.config();

connectDB();

const app = express();

// to be able to parse json body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server running at http://localhost:${port} in ${process.env.NODE_ENV} mode`
      .brightYellow.bold
  );
});
