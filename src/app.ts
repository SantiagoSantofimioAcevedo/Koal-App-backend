import express from 'express';
import sequelize from './config/database';
import router from './routes';
import authRoutes from './routes/auth-routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use('/api', router);
app.use(express.json());
app.use('/api/auth', authRoutes);



app.use(errorHandler);

const PORT = process.env.PORT || 3000;



//Test

sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));

