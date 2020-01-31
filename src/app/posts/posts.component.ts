import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  loadedPosts = [];
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }
  
  private fetchPosts() {
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
      },
    ), error => {
      this.error = error.message;
    }
  }

  onClearPosts(post: Post) {
    // Send Http request
    this.loadedPosts = this.loadedPosts.filter(p => p !== post)
    this.postsService.deletePosts(post).subscribe();
  }
}
