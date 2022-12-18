import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPic } from './users.service';

export interface IPost{
  "userId": number,
  "id": number,
  "title": String,
  "body": String,
  "picture":IPic,
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPostsUser1():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?userId=1')
  }
  getPic(id:number):Observable<IPic>{
    return this.httpClient.get<IPic>("https://picsum.photos/id/"+id+"/info");
  }
}
