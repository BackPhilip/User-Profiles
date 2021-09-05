import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  faEdit = faEdit;
  faDelete = faTrash;

  constructor(private userService: UserService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  onAdd()
  {
    this.router.navigateByUrl('/Add-User');
  }

  onClick(user: User)
  {
    this.router.navigateByUrl('/View-User');
    this.dataService.user = user;
  }

  onDelete(user: User)
  {
    if(window.confirm('Are sure you want to delete this user ?'))
    {
      this.userService.deleteUser(user).subscribe(() => (this.users = this.users.filter((u) => u.id !== user.id)));
    }
  }

  onPosts()
  {
    this.router.navigateByUrl('/Posts');
  }
}
