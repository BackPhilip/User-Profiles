import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  faDelete = faTrash;
  
  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  onDelete(post: Post)
  {

  }

  userImg(id: number)
  {
    var user;
    user = this.users.find(x => x.id == id);
    return user?.profileImg;
  }
}
