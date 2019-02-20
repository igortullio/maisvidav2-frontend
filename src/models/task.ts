export interface Task {
  id: string;
  name: string;
  weight: number;
  completed: boolean;
  createdAt: string;
}

export class TaskImpl implements Task{
  completed: boolean;
  createdAt: string;
  id: string;
  name: string;
  weight: number;

  constructor(name: string, weight: number, completed: boolean) {
    this.name = name;
    this.weight = weight;
    this.completed = completed;
  }

}


