import { Component, OnInit } from '@angular/core';
import { Task } from './../models/task.model';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private todoService: TodoService) {
    this.tasks = todoService.getTasks();
    console.log(this.tasks)
  }

  ngOnInit(): void {
  }

  addTask(): void{}

}
