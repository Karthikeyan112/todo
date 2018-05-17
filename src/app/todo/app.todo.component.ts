import { Component, OnInit } from '@angular/core';

import { TodoService } from './app.todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './app.todo.html',
  styleUrls: ['./app.todo.css']
})
export class TodoComponent implements OnInit{
  newTodo =  new Todo();
  completedTodos = [];
  TodoItems = [];
  constructor(private todoService: TodoService){}
  ngOnInit() {
    this.TodoItems = this.getAllTodos();
    this.completedTodos = this.getCompletedTodos();
  }
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
  getCompletedTodos() {
    return this.todoService.getCompletedTodos();
  }
  toggle(todo) {
    if(!todo.completed) {
      this.todoService.updateTodoById(todo.id, {completed:!todo.completed});
    }else {
      this.todoService.updateCompletedTodoById(todo.id, {completed:!todo.completed});
    }
  }
  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
    this.TodoItems = this.getAllTodos();
  }
  deleteCompletedTodo(todo){
    this.todoService.deleteCompletedTodo(todo);
    this.completedTodos = this.getCompletedTodos();
  }
  addTodo() {
    if(this.newTodo.title !== ''){
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }
}

