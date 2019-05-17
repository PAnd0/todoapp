import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${this.uri}/todos`);
  }

  getTodoById(id) {
    return this.http.get(`${this.uri}/todos/${id}`);
  }

  addTodo(title, isDone) {
    const todo = {
      title,
      isDone
    };
    return this.http.post(`${this.uri}/todos`, todo);
  }

  updateTodo(id, title, isDone) {
    const todo = {
      title,
      isDone
    };
    return this.http.post(`${this.uri}/todos/update/${id}`, todo);
  }

  deleteTodo(id) {
    return this.http.get(`${this.uri}/todos/delete/${id}`);
  }
}
