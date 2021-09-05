import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user?: User;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
      if (this.dataService.user != undefined)
      {
        localStorage.setItem('User', JSON.stringify(this.dataService.user))
        this.user = this.dataService.user;
      }
      else
      {
        this.dataService.user = JSON.parse(localStorage.getItem('User')!);
        this.user = this.dataService.user;
      }
  }

  onBack()
  {
    this.router.navigateByUrl('/Home');
  }
}
