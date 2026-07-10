import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import ticketRoutes from './Routes/ticketRoutes.js';
import commentRoutes from './Routes/commentRoutes.js';
import watcherRoutes from './Routes/watcherRoutes.js'
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use('/user', userRoutes);
app.use('/ticket', ticketRoutes);
app.use('/comment', commentRoutes);
app.use('/watcher', watcherRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB = process.env.MONGODB_URI;

// Connect to MongoDB first, then start server
mongoose.connect(MONGODB, {
}).then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
      });
}).catch((error) => {
     console.error('Error connecting to MongoDB:', error);
     process.exit(1);
});
