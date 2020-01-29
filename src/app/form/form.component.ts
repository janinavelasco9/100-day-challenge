import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {  
  loadedPosts = [];
  error = null;
  
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
    document.execCommand("defaultParagraphSeparator", false, "p");
  }
  
  private fetchPosts() {
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
        console.log(posts[posts.length - 1])
      },
    ), error => {
      this.error = error.message;
    }
  }

  
  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    console.log(postData.title);
    console.log(postData.content);
  }
}
