import { Pipe, PipeTransform } from '@angular/core';
import {Task} from './../models/task.model'

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], filter: 'completed' | 'active' | 'all'): Task[] {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  }
}