import { Component } from '@angular/core';
import { PostService, Post } from '../Services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private postService: PostService) {}
  viewornot: boolean = false;
  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  newPost: Partial<Post> = { title: '', body: '', userId: 1 };
  submitPost() {
    this.postService.addPost(this.newPost).subscribe((createdPost) => {
      this.posts.unshift(createdPost);
      this.newPost = { title: '', body: '', userId: 1 };
    });
  }
}
