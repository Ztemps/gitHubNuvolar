import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class UsersService {

  public userList: any[] = [];
  public userRepos: any[] = [];
  public userInfo: any = [];
  private gitHubUrl = 'https://api.github.com/';
  private usersQuery = 'search/users?q=';
  private users = 'users/';
  private repos = '/repos';
  private loginNameUsersQueryFilter = '+in:>login+type:>user';

  constructor(public http: HttpClient) {
  }

  getGitHubUser(userName: string): Observable<any> {
    this.userList = [];
    const url = `${this.gitHubUrl}${this.usersQuery}${userName}${
      this.loginNameUsersQueryFilter
    }`;
    return this.http.get(url).map(
      (res: any) => {
        this.userList = res;
        return this.userList;
      },
      error => {
        console.error('error: ', error);
      }
    );
  }
  getSingleGitHubUser(userName): Observable<any> {
    this.userInfo = [];
    return this.http.get(`${this.gitHubUrl}${this.users}${userName}`)
    .map(
      (res: any) => {
        this.userInfo = res;
        return this.userInfo;
      },
      error => {
        console.error('error: ', error);
      }
    );
  }
  getUserRepos(userName): Observable<any> {
    this.userRepos = [];
    return this.http
      .get(`${this.gitHubUrl}${this.users}${userName}${this.repos}`)
      .map(
        (res: any) => {
          this.userRepos = res;
          return this.userRepos;
        },
        error => {
          console.error('error: ', error);
        }
      );
  }
}
