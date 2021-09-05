import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name?: string;
  age?: number;
  about?: string;
  gender?: string;
  genderBoolean?: boolean;
  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if (this.name != undefined && this.age != undefined && this.about != undefined && this.gender != undefined)
    {
      const datepipe: DatePipe = new DatePipe("en-ZA");
      let formattedDate = datepipe.transform(new Date(), 'yyyy-MM-dd');
      if (this.gender == "male")
        this.genderBoolean = true;
      else
        this.genderBoolean = false;

      const newUser: User = {
        id: Math.random(),
        name: this.name,
        age: this.age,
        about: this.about,
        gender: this.genderBoolean,
        created: formattedDate!,
        profileImg: "../../../assets/images/default.jpg"
      }
      this.userService.addUser(newUser).subscribe(newUser => {
        this.router.navigateByUrl('/Home');
      });    
    }
    else
      alert("Please Fill All Inputs");
  }
}
