import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PostsService {
  databasePath = 'https://hundred-day-challenge-blog.firebaseio.com/posts.json';
  postPath = 'https://hundred-day-challenge-blog.firebaseio.com/posts'
  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}
    
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(
        this.databasePath,
        postData,
      )
      .subscribe(
        responseData => {
          this.log('The post was submitted successfully!');
        }
      )
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
  
  deletePosts(post: Post) {
    const id = post.id;
    const url = `${this.postPath}/${id}`;
    
    console.log(id)
    console.log(url)
    
    return this.http.delete(url, this.httpOptions)
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}