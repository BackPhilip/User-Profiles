import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/Services/post.service';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  tempPosts: any;
  totalPosts!: number;
  page: number = 1;
  faThumbsUp = faThumbsUp;
  itemsPerPage: number = 1;
  
  constructor(private postService: PostService, private router: Router) { }

  //
  //Deploys the PostService and gets a list of posts with their respective owners
  //
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      (this.tempPosts = posts)

      this.posts = this.tempPosts.data;
      this.totalPosts = this.posts.length;

      this.posts.forEach(post => {
        post.publishDate = post.publishDate.substring(0,10);
      });
    });
  }

  //
  //Navigates back to the Home page
  //
  onBack()
  {
    this.router.navigateByUrl('/Home');
  }

  //
  //Implements pagination depending on the width of the device's screen
  //
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (innerWidth < 850)  
      this.itemsPerPage = 99;
    else
      this.itemsPerPage = 1;
 }
}