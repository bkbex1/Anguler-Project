import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface IAddress {
  "street": String,
  "suite": String,
  "city": String,
  "zipcode": String,
}
export interface ICompany{
  "name": number,
  "catchPhrase": String,
  "bs": String,
}
export interface IUser{
  "id": number,
  "name": String,
  "username": String,
  "email": String,
  "address": IAddress,
  "phone": String,
  "company": ICompany,
  "website": string,
}
export interface IPic{
  "id": number,
  "author": String,
  "width": number,
  "height": number,
  "url": string,
  "download_url": string,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient:HttpClient) { }
  
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
  }

  getUserById(id:string): Observable<IUser>{
    return this.httpClient.get<IUser>("https://jsonplaceholder.typicode.com/users/"+id)
  }


}
