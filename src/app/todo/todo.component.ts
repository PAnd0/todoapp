import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) {
    const id$: Observable<string> = route.params.pipe(map(p => p.id));
    this.fetchTodo(id$);
  }

  todo: Todo;

  ngOnInit() {
  }

  updateTodo(todo) {
    this.todoService.updateTodo(todo._id, todo.title, todo.isDone).subscribe(() => {
      // this.fetchTodos();
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id).subscribe(() => {
      // this.fetchTodos();
    });
  }

  fetchTodo(id$) {
    id$.subscribe(id => {
      this.todoService.getTodoById(id).subscribe((data: Todo) => {
        this.todo = data;
      });
    });
  }

  goToList() {
    this.router.navigate(['/todos']);
  }

}
