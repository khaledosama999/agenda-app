/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();
import boot from './boot';

boot().catch((error) => {
  console.log('Application was unable to start');

  console.log(error);
  process.exit(1);
});
