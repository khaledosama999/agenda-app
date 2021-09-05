import express from 'express';
import cors from 'cors';
import { agenda } from './config';
import JobsRouter from './routes';

const Agendash = require('agendash');

const app = express();

app.use(cors());

app.use('/jobs', JobsRouter);
app.use('/dash', Agendash(agenda));

export default app;
