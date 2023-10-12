import { Injectable } from '@angular/core';
import { Task } from './models/task.model'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16)
    );
  }
  private tasks: Task[] = [
    { id: this.uuidv4(), title: 'Task 1', description: 'Description for Task 1', completed: false },
    {  id: this.uuidv4(), title: 'Task 2', description: 'Description for Task 2', completed: true },
    {  id: this.uuidv4(), title: 'Task 3', description: 'Description for Task 3', completed: false },
    {  id: this.uuidv4(), title: 'Task 4', description: 'Description for Task 4', completed: true },
    {  id: this.uuidv4(), title: 'Task 5', description: 'Description for Task 5', completed: false },
    {  id: this.uuidv4(), title: 'Task 6', description: 'Description for Task 6', completed: true },
    {  id: this.uuidv4(), title: 'Task 7', description: 'Description for Task 7', completed: false },
    {  id: this.uuidv4(), title: 'Task 8', description: 'Description for Task 8', completed: true },
    {  id: this.uuidv4(), title: 'Task 9', description: 'Description for Task 9', completed: false },
    {  id: this.uuidv4(), title: 'Task 10', description: 'Description for Task 10', completed: true },
  ];

  

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: any): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
