import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  tabletitles = [
    {'Head': 'Title', 'FieldName': 'title' },
    {'Head': 'description', 'FieldName': 'desc' },
    {'Head': 'Action', 'FieldName': '' } 
  ];
  constructor() { 
    this.todos = [
      {
        sno : 1,
        title : "first",
        desc :"description",
        active : true
      },
      {
        sno : 2,
        title : "Second",
        desc :"description2",
        active : false
      },
      {
        sno : 3,
        title : "third",
        desc :"description3",
        active : true
      },
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo : Todo){
    console.log("trigger delete event", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)    
  }
  addnewTodo(todo: Todo){
    console.log(todo,"new")
    this.todos.push(todo)
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;  
   
  }
}
