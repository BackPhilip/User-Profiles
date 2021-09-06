import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() onViewUser: EventEmitter<User> = new EventEmitter();
  users: User[] = [];
  tempUsers: any;
  totalUsers!: number;
  page: number = 1;
  itemsPerPage: number = 8;

  constructor(private userService: UserService, private router: Router, private dataService: DataService) 
  { 
    this.onResize(); 
    console.log(innerWidth)
  }

  //
  //Deploys the UserService and gets a list of users
  //
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      (this.tempUsers = users);
      this.users = this.tempUsers.data;
      this.totalUsers = this.users.length;
    }
    );
  }

  //
  //Passes the userId to be used and navigates to the view page
  //
  onClick(user: User)
  {
    this.dataService.userId = user.id!;
    this.router.navigateByUrl('/View-User');
  }

  //
  //navigates to the posts page
  //
  onPosts()
  {
    this.router.navigateByUrl('/Posts');
  }

  //
  //Implements pagination depending on the width of the device's screen
  //
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (innerWidth < 850)  
      this.itemsPerPage = 99;
    else
      this.itemsPerPage = 8;
 }
}
