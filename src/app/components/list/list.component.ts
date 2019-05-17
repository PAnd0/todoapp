import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Router } from '@angular/router';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[];
  // displayedColumns = ['title', 'isDone'];

  newTodo: Todo = { title: '', isDone: false };

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.fetchTodos();
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.addTodo(this.newTodo);
    }
  }

  addTodo(todo) {
    this.todoService.addTodo(todo.title, todo.isDone).subscribe(() => {
      this.fetchTodos();
    });
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
      console.log('Data requested ...');
      console.log(this.todos);
    });
  }

  updateTodo(todo) {
    this.todoService.updateTodo(todo._id, todo.title, todo.isDone).subscribe(() => {
      // this.fetchTodos();
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodos();
    });
  }

  viewTodo(id) {
    this.router.navigate([`/todos/${id}`]);
  }

}
