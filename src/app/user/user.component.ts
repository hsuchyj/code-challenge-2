import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserInformation } from '../model/userinformation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  authorList : UserInformation;
  titleList : UserInformation;

  constructor(public userService: UserService) { 
    this.authorList = {} as UserInformation;
    this.titleList = {} as UserInformation;
  }

  ngOnInit(): void {
    this.userService.getUsers("https://poetrydb.org/author").subscribe((response:UserInformation) => {
      debugger;
      this.authorList = response;
      console.log(response)
      return;
    });

    this.userService.getUsers("https://poetrydb.org/titles").subscribe((response:UserInformation) => {
      debugger;
      this.titleList = response;
      console.log(response)
      return;
    });
  }

}
