import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  successMessage: string;
  isSuccess = false;
  
  constructor(private http: HttpClient, private postsService: PostsService, private fb: FormBuilder) {}

  ngOnInit() {
  }
  
  postForm: FormGroup = this.fb.group({
    title: [''],
    content: ['']
  });

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.isSuccess = true;
    this.successMessage = 'Post has been submitted successfully!';
  }
}
