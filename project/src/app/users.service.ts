import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IUser } from '../app/interfaces';

interface AllUsers{
  "users":IUser[]
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient:HttpClient) { }
  
  getUsers(): Observable<AllUsers>{
    return this.httpClient.get<AllUsers>("https://dummyjson.com/users")
  }

  getUserById(id:string): Observable<IUser>{
    return this.httpClient.get<IUser>("https://dummyjson.com/users/"+id)
  }


}
