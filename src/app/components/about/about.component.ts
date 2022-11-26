import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usersList:any [] = [];
  errors:any;
  curPage: number =1;
  totalData: number;
  headArray = [
    {'Head': 'User Name', 'FieldName': 'name' },
    {'Head': 'Email', 'FieldName': 'email' },
    {'Head': 'Contact', 'FieldName': 'phone' },
    {'Head': 'Website', 'FieldName': 'website' } ,
    {'Head': 'Action', 'FieldName': '' } 
  ];
  constructor(private userList:GetUsersService) {
    this.usersList = new  Array<any>()
  }

  ngOnInit(): void {
    this.loadUsers()
    
  }
  loadUsers() {
   this.userList.getUserList().subscribe((result: any)=> {
    console.log(result) 
    this.totalData = result?.length
    this.usersList = result;
    },
    (error:any) => this.errors = error.message)   
  }
  editUser(data:any){
    console.log("data" , data);
  }
  deleteUser(data:any){
    this.usersList = this.usersList.filter((item) => item.id !== data.id )
  }
}
