import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  userName = '';
  public userInfo;
  constructor(
    private activatedRoute: ActivatedRoute,
    public _usersService: UsersService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( params => ( this.userName = this.activatedRoute.params['value'].username))
      .subscribe((id: any) => {
        this._usersService.getSingleGitHubUser(id).subscribe();
        this._usersService.getUserRepos(id).subscribe();
        });
    }

}
