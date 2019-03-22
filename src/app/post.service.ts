import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const POSTS_ROUTE = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_ROUTE = 'https://jsonplaceholder.typicode.com/comments';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(POSTS_ROUTE).toPromise();
  }

  getComments(postId: string) {
    return this.http.get(COMMENTS_ROUTE + `?postId=${postId}`).toPromise();
  }
}
