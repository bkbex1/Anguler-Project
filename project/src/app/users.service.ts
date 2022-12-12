import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IAddress {
  "street": String,
  "suite": String,
  "city": String,
  "zipcode": String,
}

export interface IUser{
  "id": number,
  "name": String,
  "username": String,
  "email": String,
  "address": IAddress,
  "phone": String,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
  }
}
