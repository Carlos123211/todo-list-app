import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from './../models/task.model';
import { TodoService } from '../todo.service';
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  taskFilter: 'completed' | 'active' | 'all' = 'all';
  titleTask: string = '';
  titleDescription: string = '';
  Modal: bootstrap.Modal | undefined;
  taskActionText: 'Add' | 'Edit' = 'Add'
  actualtask: Task;
  constructor(private todoService: TodoService) {
    this.getTask();
  }

  ngOnInit(): void {
  }

  openModal(element: any): void {
    this.clearModels();
    this.Modal = new bootstrap.Modal(element, {})
    this.Modal.show();
    this.taskActionText = 'Add'
  }

  getTask(): void {
    this.tasks = this.todoService.getTasks();
  }

  clearModels(): void {
    this.titleTask = ''
    this.titleDescription = ''
  }

  addTask(): void {
    if (this.titleTask != '' && this.titleDescription != '') {
      let newTask: Task = { id: this.todoService.uuidv4(), title: this.titleTask, description: this.titleDescription, completed: false }
      this.todoService.addTask(newTask)
      this.clearModels()
      this.Modal?.hide();
      this.getTask();
    } else {
      this.Modal?.hide();
    }
  }

  openEditTask(element: any, task: Task): void {
    this.Modal = new bootstrap.Modal(element, {})
    this.taskActionText = 'Edit';
    this.Modal.show();
    this.actualtask = task
    this.titleTask = task.title;
    this.titleDescription = task.description;

  }

  editTask(task: Task) {
    if (this.titleTask != '' && this.titleDescription != '') {
      let editedTask: Task = { id: task.id, title: this.titleTask, description: this.titleDescription, completed: task.completed }
      this.todoService.updateTask(editedTask)
      this.clearModels()
      this.Modal?.hide();
      this.getTask();
    } else {
      this.Modal?.hide();
    }
  }

  updateFilter(e: Task): void {
    this.tasks = this.tasks.slice()
  }

  deleteTask(task: Task): void {
    this.Modal?.hide();
    Swal.fire({
      title: 'Are you sure to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.todoService.deleteTask(task.id)
        this.getTask();
        Swal.fire('Deleted', '', 'success')
      }
    })
  }

}
