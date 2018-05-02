import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  searchValue = '';
  usersList: any[];
  constructor(public _usersService: UsersService ) { }

  ngOnInit() {
  }

  searchUser() {
    this._usersService.getGitHubUser(this.searchValue).subscribe();
  }
}
