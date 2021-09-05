import { agenda } from '../config';
import {
  JOB_1,
  JOB_2,
  JOB_3,
  JOB_4,
  JOB_5,
  JOB_6,
  JOB_7,
  JOB_8,
  JOB_9,
  JOB_10,
} from './constants';
import handler from './handlers';

agenda.define(JOB_1, handler);
agenda.define(JOB_2, handler);
agenda.define(JOB_3, handler);
agenda.define(JOB_4, handler);
agenda.define(JOB_5, handler);
agenda.define(JOB_6, handler);
agenda.define(JOB_7, handler);
agenda.define(JOB_8, handler);
agenda.define(JOB_9, handler);
agenda.define(JOB_10, handler);

agenda.start();

export default agenda;
