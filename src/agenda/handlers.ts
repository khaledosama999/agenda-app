import { Processor } from 'agenda';
import { Jobs } from '../models';

const handler : Processor = async (job, done) => {
  console.log(`Running job ${job.attrs.name}`);

  const randomNumber = Math.round(Math.random() * 10);
  console.log(`Job ${job.attrs.name} generated: ${randomNumber}`);

  await Jobs.create({ jobName: job.attrs.name, number: randomNumber });

  if (randomNumber === 5) {
    console.log(`Removing job ${job.attrs.name}`);

    await job.remove();
    done();
  }

  done();
};

export default handler;
