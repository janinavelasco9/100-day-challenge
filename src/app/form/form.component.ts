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
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    // this.fetchPosts();
  }
  
  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }
}
