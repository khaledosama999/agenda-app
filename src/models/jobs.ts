import mongoose from 'mongoose';

interface Job {
    _id: string,
    number: number,
    jobName: string
    createdAt: Date
    updatedAt: Date
}

const jobSchema = new mongoose.Schema<Job>({
  number: {
    type: Number,
    required: true,
  },

  jobName: {
    type: String,
    required: true,
  },

}, { timestamps: true });

export default mongoose.model<Job>('Jobs', jobSchema);
