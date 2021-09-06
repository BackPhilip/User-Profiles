import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private userService: UserService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      (this.tempUsers = users);
      this.users = this.tempUsers.data;
    });

  }

  onClick(user: User)
  {
    this.dataService.userId = user.id!;
    this.router.navigateByUrl('/View-User');
  }

  onPosts()
  {
    this.router.navigateByUrl('/Posts');
  }
}
