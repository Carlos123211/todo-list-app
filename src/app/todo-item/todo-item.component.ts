import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './../models/task.model'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskUpdated: EventEmitter<Task> = new EventEmitter();
  @Output() taskDeleted: EventEmitter<Task> = new EventEmitter();
  @Output() taskEdit: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  taskCompletedUpdate() {
    this.taskUpdated.emit(this.task)
  }

  deleteTask() {
    this.taskDeleted.emit(this.task)
  }

  editTask() {
    this.taskEdit.emit(this.task)
  }


}
