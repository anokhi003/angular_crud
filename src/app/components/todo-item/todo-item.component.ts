import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo :Todo;
  @Input() i : number;
  @Output() todoDetele: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxClick : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo){
    this.todoDetele.emit(todo)
    console.log("clicked")
  }
  onCheckboxClick(todo : Todo){
    this.checkboxClick.emit(todo)
  }
}
