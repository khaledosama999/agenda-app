import mongoose from 'mongoose';
import app from './app';

const boot = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  app.listen(process.env.PORT, () => {
    console.log(`APP started at ${process.env.PORT}`);
  });
};

export default boot;
