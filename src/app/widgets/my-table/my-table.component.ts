import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @Input() HeadArray: any[] = [];       //for table heading
  @Input() GridArray: any[] = [];       //for tablebody
  @Input() page: number = 1;            //for current page in pagination
  @Input() totalRes: number;            //for total data value in pagenation
  @Input() isCheckbox: boolean = false; //for checkbox show
  @Input() isEditBtn: boolean = false;  //for edit button show
  @Output() OnEdit = new EventEmitter<any>();
  @Output() OnDelete = new EventEmitter<any>();
  @Output() onCheckbox = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {}


  edit(item:any) {
    this.OnEdit.emit(item)
  }
  delete(item:any){
    this.OnDelete.emit(item)
  }
  onCheckboxClick(item: any){
    this.onCheckbox.emit(item)
  }
}
