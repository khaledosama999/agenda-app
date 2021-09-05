/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import { RequestHandler } from 'express';
import agenda from '../agenda/jobs';
import { JOBS_NAMES_MAP } from '../agenda/constants';

const startJobController: RequestHandler = async (req, res) => {
  try {
    const jobId = req.params.id as string;
    const runningJobs = agenda._runningJobs;
    const jobName = JOBS_NAMES_MAP[Number(jobId)];

    for (const job of runningJobs) {
      if (job.attrs.name === jobName) {
        return res.send('Job is already running');
      }
    }

    await agenda.every('2 seconds', jobName);

    return res.send('started job successfully');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Something went wrong');
  }
};

export default startJobController;
