import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPic, IPost } from './sheared/interfaces/index';

export interface Post{
  "posts":IPost[],
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getNewPosts(): Observable<Post>{
    return this.httpClient.get<Post>('https://dummyjson.com/posts')

  }
  getNewPost(id:number): Observable<IPost>{
    return this.httpClient.get<IPost>('https://dummyjson.com/posts/'+id)
  }
  getUserAllNewPosts(id:number): Observable<Post>{
    return this.httpClient.get<Post>('https://dummyjson.com/posts/user/'+id)
  }
  // getPostsUser1():Observable<IPost[]>{
  //   return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?userId=1')
  // }
  getPic(id:number):Observable<IPic>{
    return this.httpClient.get<IPic>("https://picsum.photos/id/"+id+"/info");
  }
}
