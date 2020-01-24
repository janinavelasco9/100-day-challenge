import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostsService {
  databasePath = 'https://hundred-day-challenge-blog.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}
  
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        this.databasePath,
        postData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }
  
  fetchPosts() {
    return this.http
      .get(this.databasePath)
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
  }
  
  deletePosts() {
    return this.http.delete(
      this.databasePath
    );
  }
}