import { Injectable } from '@angular/core';

import {Todo} from './todo';

@Injectable()
export class TodoService {
  Todos = [];
  completedTodos = [];
  lastId: number = 0;

  constructor() { }

  getAllTodos() {
      return this.Todos;
  }

  getCompletedTodos() {
    return this.completedTodos;
  }
  
  addTodo(todo) {
      todo['id'] = ++this.lastId;
      this.Todos.push(todo);
      console.log(todo);
  }

  deleteTodo(todo) {
      this.Todos = this.Todos.filter( Todo => Todo.id !== todo.id);
      console.log(this.Todos);
  }

  deleteCompletedTodo(todo){
    this.completedTodos = this.completedTodos.filter( Todo => Todo.id !== todo.id);
  }

  getTodoById(id: number): Todo {
    return this.Todos
    .filter( todo => todo.id === id).pop();
  }

  updateTodoById(id: number, values: Object = {}) {
     this.Todos
    .filter((todo, index) => {
        if(todo.id === id){
            Object.assign(todo, values);
            if(todo.completed === true) {
                this.completedTodos.push(todo);
                this.Todos.splice(index, 1);
            }
        }
    });
  }

  updateCompletedTodoById(id: number, values: Object = {}) {
    this.completedTodos
   .filter((todo, index) => {
       if(todo.id === id){
           Object.assign(todo, values);
               this.Todos.push(todo);
               this.completedTodos.splice(index, 1);
       }
   });
 }
 
}