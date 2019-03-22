import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const POSTS_ROUTE = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(POSTS_ROUTE).toPromise();
  }
}
