import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError} from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http : HttpClient) { }

  //-- getUserList
  getUserList():Observable<any>{
    const Url ="https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(Url)
                    .pipe(catchError(this.errorHandle));
                    
  }
  errorHandle(error : HttpErrorResponse){
    console.log("error",error.message);
    return throwError(error || 'server error');
  }
}
