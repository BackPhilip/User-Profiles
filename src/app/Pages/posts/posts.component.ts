import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  tempPosts: any;
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      (this.tempPosts = posts)

      this.posts = this.tempPosts.data;

      this.posts.forEach(post => {
        post.publishDate = post.publishDate.substring(0,10);
      });
    });
  }

  userImg(id: number)
  {
    /*var user;
    user = this.users.find(x => x.id == id);
    return user?.profileImg;*/
  }
}