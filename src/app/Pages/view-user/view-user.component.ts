import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user!: User;
  userId!: string

  constructor(private dataService: DataService, private router: Router, private userService: UserService) { }

  //
  //Deploys the UserService and gets a single user, makes a copy of the 
  //current userId to the local storage to be used in case the page is refreshed
  //
  ngOnInit(): void {

    if (this.dataService.userId == undefined)
    {
        this.userService.getUser(localStorage.getItem('User')!).subscribe(user => {
        this.user = user;
        this.user.dateOfBirth = user.dateOfBirth.substring(0,10);
        this.user.registerDate = user.registerDate.substring(0, 10);
      })
    }
    else
    {
        localStorage.setItem('User',(this.dataService.userId));
        this.userId = this.dataService.userId;
        this.userService.getUser(this.dataService.userId).subscribe(user => {
        this.user = user;
        this.user.dateOfBirth = user.dateOfBirth.substring(0,10);
        this.user.registerDate = user.registerDate.substring(0, 10);
      })
    }
  }

  //
  //Navigates back to the Home page
  //
  onBack()
  {
    this.router.navigateByUrl('/Home');
  }
}