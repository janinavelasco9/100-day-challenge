import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostsService {
  databasePath = 'https://hundred-day-challenge-blog.firebaseio.com/posts.json';
  postPath = 'https://hundred-day-challenge-blog.firebaseio.com/posts'

  apiKey = 'AIzaSyAAgWBckC9zVrCi3FnhftJcn1i6u7xG48Q';
  // httpOptions = {
  //   headers: new HttpHeaders({ 
  //     'Access-Control-Allow-Origin': '*', 
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  //     'Content-Type': 'application/json', 
  //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'apiKey': this.apiKey})
  // };
  
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private db: AngularFirestore) {
      this.itemsCollection = db.collection('posts')
    }
    
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
    return this.itemsCollection.valueChanges();
    
    
    // return this.http
    //   .get(this.databasePath)
    //   .pipe(
    //     map(responseData => {
    //       const postsArray = [];
    //       for (const key in responseData) {
    //         if (responseData.hasOwnProperty(key)) {
    //           postsArray.push({ ...responseData[key], id: key });
    //         }
    //       }
    //       return postsArray;
    //     })
    //   )
  }
  
  deletePosts(post: Post) {
    const id = post.id;
    const url = `${this.postPath}/${id}`;

    return this.http.delete(url)
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}