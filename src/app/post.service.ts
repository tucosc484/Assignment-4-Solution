import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './types/Post';

const POSTS_ROUTE = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_ROUTE = 'https://jsonplaceholder.typicode.com/comments';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  /**
   * Fetches all posts from the API.
   *
   * @returns all posts.
   */
  getAllPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(POSTS_ROUTE).toPromise();
  }

  /**
   * Fetches a single post from the API by applying a query to the posts route.
   *
   * Note that before we convert this to a promise, we are piping the Observable
   * through the RxJS map operator. This is done because the API still returns
   * an array when we query for a post by the ID, but since ID is a unique
   * property only one result will be returned. Since we understand that about
   * the API, we will map the response data to be the element at the first index
   * of the array. This allows us to keep this task encapsulated to our service,
   * and our components will just simply get a post when they ask for one.
   *
   * If the map operation here looks unfamiliar, be sure that you go back to the
   * recorded lecture on Reactive Programming and RxJS.
   *
   * @param postId the id of the post that we want to fetch.
   */
  getPost(postId: string): Promise<Post> {
    return this.http.get(POSTS_ROUTE + `?id=${postId}`)
      .pipe(
        map(postArray => postArray[0]),
      )
      .toPromise();
  }

  getComments(postId: string) {
    return this.http.get(COMMENTS_ROUTE + `?postId=${postId}`).toPromise();
  }
}
