import {Task} from "./task";

export interface Job {
  id: string;
  name: string;
  active: boolean;
  parentJob: Job;
  tasks: Task[];
}

export class JobImpl implements Job {
  active: boolean;
  id: string;
  name: string;
  parentJob: Job;
  tasks: Task[];

  constructor(name: string, active: boolean) {
    this.name = name;
    this.active = active;
  }

}
