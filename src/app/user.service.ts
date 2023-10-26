import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserInformation } from './model/userinformation';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(url:any): Observable<UserInformation> {
    //const url = 'https://poetrydb.org/author';
    return this.http.get<UserInformation>(url).pipe(
      catchError(error => {
        return throwError(error.message);
      }));
  }
  
}
